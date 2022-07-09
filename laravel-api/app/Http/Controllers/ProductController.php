<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        usleep(500000);

        return ProductResource::collection(
            Product::orderBy('created_at', 'desc')->simplePaginate(4)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $product = Product::create(
            Arr::except($request->validated(), 'image')
        );

        // for now handles only main (primary) image upload
        $image = $request->file('image');
        $filename = $image->getClientOriginalName();
        $product_dir = 'products/' . $product->id . '/';
        // store each product images under dir with its unique id
        $image->storeAs("/public/{$product_dir}", $filename);
        $url = Storage::url($product_dir . $filename);
        $product->images()->create(['url' => $url, 'is_main' => 1]);

        // TODO: handle multiple images upload later on
        // ...

        return response()->json(['product' => $product]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Product successfully deleted']);
    }
}
