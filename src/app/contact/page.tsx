'use client';
import {z} from "zod";
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";

const formScheme = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  num: z.string().regex(/^(\+)?(\d+)(\s?|-?)(\d+)(\s?|-?)(\d+)(\s?|-?)(\d+)(\s?|-?)$/g, "Invalid phone number"),
  message: z.string().min(2)
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme)
  });

  const handleDataToSubmit = (data: z.infer<typeof formScheme>) => {}

  return (
    <div className="flex h-full w-full items-center justify-center">
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleDataToSubmit)}
      >
        <h2 className="text-2xl font-bold">
          Contact
        </h2>

        <div className="flex flex-col">
          <span className="error-input">{errors?.name?.message}</span>
          <input
            type="text"
            placeholder="Name *"
            {...register("name", {required: "Required value"})}
            className="form-input"
          />
        </div>

        <div className="flex flex-col">
          <span className="error-input">{errors?.email?.message}</span>
          <input
            type="text"
            placeholder="Email *"
            {...register("email", {required: "Required value"})}
            className="form-input"
          />
        </div>

        <div className="flex flex-col">
          <span className="error-input">{errors?.num?.message}</span>
          <input
            type="text"
            placeholder="Phone *"
            {...register("num", {required: "Required value"})}
            className="form-input"
          />
        </div>

        <div className="flex flex-col">
          <span className="error-input">{errors?.message?.message}</span>
          <textarea
            placeholder="Message *"
            {...register("message", {required: "Required value"})}
            className="form-input resize-none h-[8rem]"
          />
        </div>


        <div>
          <button
            className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}