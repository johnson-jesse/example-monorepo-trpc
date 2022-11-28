import { SimpleDialog, SimpleDialogProps } from "@fizzog/sx";
import { styled } from "@fizzog/ui";
import NextError from "next/error";
import stringifyObject from "stringify-object";
import { trpc } from "~/utils/trpc";

const Container = styled(SimpleDialog)`
  .MuiPaper-root {
    min-width: 35%;
  }
`;

export default function SimpleUsersDialog({
  ...props
}: Omit<SimpleDialogProps, "children">) {
  const users = trpc.user.list.useQuery({});

  return (
    <Container {...props}>
      {users.error && (
        <NextError
          title={users.error.message}
          statusCode={users.error.data?.httpStatus ?? 500}
        />
      )}

      {!users.error && !users.data && <>Loading...</>}
      <pre>
        {users.data &&
          stringifyObject(users.data.items, {
            indent: "  ",
            singleQuotes: false,
            inlineCharacterLimit: 12,
          })}
      </pre>
    </Container>
  );
}
