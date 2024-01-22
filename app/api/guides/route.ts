import connectDB from "@/lib/mongodb";
import Guides from "@/models/guides";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  const { name, username, email, phone, about, price, location, languages } =
    await req.json();
  console.log(name, username, email, phone, about, price, location, languages);

  try {
    await connectDB();

    await Guides.create({
      name,
      username,
      email,
      phone,
      about,
      price,
      location,
      languages,
    });

    return NextResponse.json({
      msg: "Request sent sucessfully",
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = [];
      for (const e in error.errors) {
        errorList.push(e);
      }

      return NextResponse.json({
        msg: errorList,
      });
    } else {
      return NextResponse.json({
        msg: "Unable to send request",
      });
    }
  }
}

export async function GET(request: any) {
  try {
    await connectDB();
    const email = request.nextUrl.searchParams.get("email");
    const guideCount = await Guides.countDocuments({ email });

    return NextResponse.json({ exists: guideCount > 0 }); // Use NextResponse here
  } catch (error) {
    console.error("Error checking guide existence:", error);
    return NextResponse.json(
      { error: "Failed to check guide existence" },
      { status: 500 }
    );
  }
}
