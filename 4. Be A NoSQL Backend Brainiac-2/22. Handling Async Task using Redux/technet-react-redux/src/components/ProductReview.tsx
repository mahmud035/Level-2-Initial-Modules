/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useGetCommentQuery,
  usePostCommentMutation,
} from '@/redux/features/products/productApi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface IProps {
  readonly id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  // NOTE: Mutation
  const [postComment, { isLoading, isError, isSuccess }] =
    usePostCommentMutation();

  // NOTE: Query
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000, // 30 seconds
  });

  console.log(data);

  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

    // WARNING: Back-end theke jevabe data ta receive korbe, Front-end theke amake sei-vabe-e data k pathate hobe. Otherwise, backend theke data pabe na.
    const options = {
      id: id,
      data: {
        comment: inputValue,
      },
    };
    //* call mutation hook
    postComment(options);

    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div className="mx-auto mt-5 max-w-7xl">
      <form className="flex items-center gap-5" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-10">
        {data?.map((comment: string) => (
          <div key={comment} className="flex items-center gap-3 mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
