<?php

namespace App\Http\Controllers;

use App\Models\House;
use Illuminate\Http\Request;

class HouseController extends Controller
{
    function index(Request $request)
    {
        $name = $request->name;
        $min_price = $request->min_price;
        $max_price = $request->max_price;
        $bedrooms = $request->bedrooms;
        $bathrooms = $request->bathrooms;
        $storeys = $request->storeys;
        $garages = $request->garages;

        sleep(1); // for loader
        $house = House::query()
            ->when($name, function ($query) use ($name) {
                return $query->where("name", 'like', "%$name%");
            })
            ->when($bedrooms, function ($query) use ($bedrooms) {
                return $query->where("bedrooms",  $bedrooms);
            })
            ->when($bathrooms, function ($query) use ($bathrooms) {
                return $query->where("bathrooms", $bathrooms);
            })
            ->when($storeys, function ($query) use ($storeys) {
                return $query->where("storeys", $storeys);
            })
            ->when($garages, function ($query) use ($garages) {
                return $query->where("garages", $garages);
            })
            ->when($min_price, function ($query) use ($min_price) {
                return $query->where("price", '>', $min_price);
            })
            ->when($max_price, function ($query) use ($max_price) {
                return $query->where("price", '<', $max_price);
            })
            ->get();
        return response()->json($house);
    }
}
