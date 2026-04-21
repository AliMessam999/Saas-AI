import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <>
            <p className="text-3xl text-black mx-auto mt-10">Landing Page</p>
            <div className="flex gap-4">
                {/* <Link href="/sign-in">
                    <Button>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Sign Up</Button>
                </Link> */}
            </div>
        </>
    );
}

export default LandingPage;