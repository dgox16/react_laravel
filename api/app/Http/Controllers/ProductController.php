<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Throwable;

class ProductController extends Controller
{
    public function index(Request $request): ProductCollection
    {
        if ($request->user()->cannot('viewAny', Product::class)) {
            abort(403);
        }

        $products = $request->user()->products;

        return new ProductCollection($products);
    }

    public function store(StoreProductRequest $request): JsonResponse
    {
        try {
            if ($request->user()->cannot('create', Product::class)) {
                abort(403);
            }
            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'user_id' => Auth::id()
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Product created successfully',
                'data' => $product
            ]);

        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function show(Request $request, Product $product): ProductResource
    {
        if ($request->user()->cannot('view', $product)) {
            abort(403);
        }
        return new ProductResource($product);
    }

    public function update(UpdateProductRequest $request, Product $product): JsonResponse
    {
        try {
            if ($request->user()->cannot('update', $product)) {
                abort(403);
            }

            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;

            $product->save();

            return response()->json([
                'status' => true,
                'message' => 'Product updated successfully',
                'data' => $product
            ]);

        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function destroy(Request $request, $id): JsonResponse
    {
        try {
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'status' => false,
                    'message' => __('product_messages.not_found')
                ], 404);
            }

            if ($request->user()->cannot('delete', $product)) {
                return response()->json([
                    'status' => false,
                    'message' => __('product_messages.unable_to_delete')
                ]);
            }

            $product->delete();

            return response()->json([
                'status' => true,
                'message' => __('product_messages.product_deleted'),
            ]);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => __('product_messages.something_went_wrong')
            ], 500);
        }
    }
}
