import users from '../../lib/connectUsersDatabase';
import { NextResponse } from 'next/server';

export async function GET () {
    return NextResponse.json({
        message: "successfully",
        data: users
    }) ;
}
