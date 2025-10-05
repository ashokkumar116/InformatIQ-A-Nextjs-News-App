"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ReadMoreButton = ({id}) => {

    const router = useRouter();

    return (
        <button
            className="p-1 mt-2 rounded-md text-sm cursor-pointer bg-indigo-700"
            onClick={async()=>{await router.push(`/news/${id}`)}}
        >
            Read More
        </button>
    );
};

export default ReadMoreButton;
