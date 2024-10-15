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
    public function index(Request $request)
    {
        try {
            if ($request->user()->cannot('viewAny', Product::class)) {
                return response()->json([
                    'status' => false,
                    'message' => __('product_messages.unable_to_view_all')
                ], 403);
            }
            $products = $request->user()->products;

            return new ProductCollection($products);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => __('product_messages.something_went_wrong')
            ], 500);
        }
    }

    public function store(StoreProductRequest $request): JsonResponse
    {
        try {
            if ($request->user()->cannot('create', Product::class)) {
                return response()->json([
                    'status' => false,
                    'message' => __('product_messages.unable_to_create')
                ], 403);
            }
            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'user_id' => Auth::id()
            ]);

            return response()->json([
                'status' => true,
                'message' => __('product_messages.product_created'),
                'data' => $product
            ]);

        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => __('product_messages.something_went_wrong')
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

    public function update(UpdateProductRequest $request, $id): JsonResponse
    {
        try {
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'status' => false,
                    'message' => __('product_messages.not_found')
                ], 404);
            }

            if ($request->user()->cannot('update', $product)) {
                return response()->json([
                    'status' => false,
                    'message' => __('product_messages.unable_to_update')
                ], 403);
            }

            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;

            $product->save();

            return response()->json([
                'status' => true,
                'message' => __('product_messages.product_updated'),
                'data' => $product
            ]);

        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => __('product_messages.something_went_wrong')
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
                ], 403);
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
