import { Typography, Avatar, Rating } from "@material-tailwind/react";



export function Raitingabout() {
    return (
        <div className="w-full px-8 text-center h-[200px] flex flex-col justify-center items-center">
            <div className="w-12"> <Avatar
                src="logo.png"
                alt="logo"
                className="w-auto h-12"
            />
            </div>
            <Typography variant="h6" className="mt-4">
                Mercedes-Benz
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
                Mercedes-Benz 
                
            </Typography>
         <Rating value={5} readonly></Rating>
 

          
        </div>
    );
}