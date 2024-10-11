"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { insertOneUser } from "../server/user"
  
const formSchema = z.object({
    name: z.string({
        required_error: "Please enter your name.",
    }),
    question1: z.string({
        required_error: "Please select an option.",
    }),
    question2: z.enum(["trauma", "high", "perf", "all"], {
        required_error: "Please select an option.",
    }),
    question3: z.enum(["peers", "monitoring", "selfcontrol", "neighbourhood"], {
        required_error: "Please select an option.",
    }),
    question4: z.enum(["true", "false"], {
        required_error: "Please select an option.",
    }),
})

export default function Quiz() {
    const { toast } =  useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // if (values.question1 === "pink") {
        //     toast({
        //         title: "Succsess!",
        //         description: "You are gay."
        //     })
        //     return
        // }

        // toast({
        //     title: "Unfortunate!",
        //     description: "You are straight."
        // })
        console.log(values)

        let score = 0
        let isSmart = false

        if (values.question2 === "all") {
            score++
        }
        if (values.question3 === "peers") {
            score++
        }
        if (values.question4 === "true") {
            score++
        }

        if (score === 3) {
            isSmart = true
            toast({
                title: "Congratulations! Your score is 3/3",
                description: "You are smart!"
            })
        } else {
            toast({
                title: "Unfortunate! Your score is " + score + "/3",
                description: "You are not smart."
            })
        }
        insertOneUser(values.name, isSmart)
    }

    return (
      <div className="flex flex-col p-12 justify-center items-center h-full">
        <h1 className="text-4xl font-bold pb-12">Take a short quiz on drug abuse!</h1>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 min-w-full">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-bold">What is your name?</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter your name here..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="question1"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-bold">Question 1:</FormLabel>
                        <FormDescription>
                            What is your favorite color?
                        </FormDescription>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="red">Red</SelectItem>
                                <SelectItem value="blue">Blue</SelectItem>
                                <SelectItem value="pink">Pink</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="question2"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-bold">Question 2:</FormLabel>
                        <FormDescription>
                            What is a common reason people may use drugs, even if they know drugs may be unhealthy for them?
                        </FormDescription>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="trauma" />
                                    </FormControl>
                                    <FormLabel className="font-normal">To cope with trauma</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="high" />
                                    </FormControl>
                                    <FormLabel className="font-normal">To feel pleasure/experience a “high”</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="perf" />
                                    </FormControl>
                                    <FormLabel className="font-normal">To enhance performance in sports or school</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="all" />
                                    </FormControl>
                                    <FormLabel className="font-normal">All of the above</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="question3"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-bold">Question 3:</FormLabel>
                        <FormDescription>
                            Which of the following is an example of a risk factor?
                        </FormDescription>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="peers" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Substance abuse in peers</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="monitoring" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Parental monitoring</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="selfcontrol" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Self-control</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="neighbourhood" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Strong neighborhood attachment</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="question4"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="font-bold">Question 3:</FormLabel>
                        <FormDescription>
                            Most people who are treated for substance-use disorder need to stay in treatment for at least 3 months.
                        </FormDescription>
                        <FormControl>
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                            >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="true" />
                                    </FormControl>
                                    <FormLabel className="font-normal">True</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="false" />
                                    </FormControl>
                                    <FormLabel className="font-normal">False</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Submit</Button>
                </form>
            </Form>
      </div>
    );
  }