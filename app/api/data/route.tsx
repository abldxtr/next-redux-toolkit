import { MOVIE_DATA } from "@/component/data";
import {NextResponse} from "next/server";


export async function GET(){

    return NextResponse.json(MOVIE_DATA);



}