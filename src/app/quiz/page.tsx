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
  
const formSchema = z.object({
    name: z.string({
        required_error: "Please enter your name.",
    }),
    question1: z.string({
        required_error: "Please select an option.",
    }),
    question2: z.string({
        required_error: "Please select an option.",
    }),
    question3: z.string({
        required_error: "Please select an option.",
    }),
    question4: z.string({
        required_error: "Please select an option.",
    })
})

export default function Quiz() {
    const { toast } =  useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (values.question1 === "pink") {
            toast({
                title: "Succsess!",
                description: "You are gay."
            })
            return
        }

        toast({
            title: "Unfortunate!",
            description: "You are straight."
        })
        console.log(values)
    }

    return (
      <div className="flex flex-col px-12 justify-center items-center">
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
                                        <RadioGroupItem value="correct" />
                                    </FormControl>
                                    <FormLabel className="font-normal">To cope with trauma</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong1" />
                                    </FormControl>
                                    <FormLabel className="font-normal">To feel pleasure/experience a “high”</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong2" />
                                    </FormControl>
                                    <FormLabel className="font-normal">To enhance performance in sports or school</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong3" />
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
                                        <RadioGroupItem value="correct" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Substance abuse in peers</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong1" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Parental monitoring</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong2" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Self-control</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong3" />
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
                name="question3"
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
                                        <RadioGroupItem value="correct" />
                                    </FormControl>
                                    <FormLabel className="font-normal">True</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                        <RadioGroupItem value="wrong" />
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