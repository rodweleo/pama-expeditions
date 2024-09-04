import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

export default function TestimonialCard() {
    return (
        <div className="size-[500px] bg-white p-5 h-fit space-y-2">
            <div className="flex gap-1">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="font-bold text-xl">John Doe</h1>
                    <p>Nakuru, Kenya</p>
                </div>
            </div>
            <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus perferendis quam! Laboriosam nesciunt eaque assumenda cumque fuga, obcaecati temporibus quam. Fugit asperiores minus ducimus, reiciendis illo facere tempore quis!</q>
            <em>~ 16 Aug 2024</em>
        </div>
    )
}