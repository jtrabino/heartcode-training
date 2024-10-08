import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const AboutMe = () => {
    return (
        <div className="px-6    ">
            <Card>
                <CardHeader>
                    <CardTitle>Hi, I&apos;m Jeremiah</CardTitle>
                    <CardDescription>I dislike coding</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-row gap-2"><p className="font-bold">Name:</p><p>Jeremiah</p></div>
                    <div className="flex flex-row gap-2"><p className="font-bold">Major:</p><p>Computer Science</p></div>
                    <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p><p>Sucking at coding</p></div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutMe;