import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, activeLinkClass, ...props }) => {
    const { pathname } = useRouter();

  return (
      <Link href={props.href} className={pathname == props.href ? "text-red-500" : ""} >
        {children}
      </Link>
  )
}

export default ActiveLink;
