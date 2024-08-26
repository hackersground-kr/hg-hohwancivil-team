import { useNavigate } from "react-router-dom";
import { writeAddRequestType } from "../types/requestType";
import { createPost } from "../apis/Post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (postFormData: writeAddRequestType) => createPost(postFormData),
    onSuccess: () => {
      navigate("/");
      queryClient.refetchQueries({ queryKey: ["posts"] });
    },
  });
};
