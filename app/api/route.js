import { NextResponse } from 'next/server';
import posts from '../../blogData.json';

export async function GET() {
 
      return NextResponse.json(posts);

  }