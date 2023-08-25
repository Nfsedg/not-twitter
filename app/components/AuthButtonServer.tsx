import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonClient from "./AuthButtonClient";

export async function AuthButtonServer() {
  // const [session, setSession] = useState<Session | null>(null);
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  // useEffect(() => {
  //   const getSession = async () => {
  //     const { data } = await supabase.auth.getSession();
  //     setSession(data.session);
  //   };
  //   getSession();
  // }, []);

  return <AuthButtonClient session={session} />;
}
