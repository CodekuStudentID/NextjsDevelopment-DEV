import { NextResponse } from 'next/server';
import users from '../../../lib/connectUsersDatabase';


export async function GET (request, {params}) {
    const { id } = await params;
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return NextResponse.json({
            message: "User not found",
            data: null,
            status: 404
        });
    } 

        return NextResponse.json({
            message: "successfully",
            data: user,
            status: 200
        });

}