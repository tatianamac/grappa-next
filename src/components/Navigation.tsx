import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";
import styles from '../styles/components/Navigation.module.scss';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
      <nav className={styles.navigation}>
    {/* <Burger active={active} onClick={() => setActive(!active)} /> */}
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>about</a>
            </Link>
        </li>
        <li>
          <Link href="/education">
            <a className={router.pathname === "/education" ? "active" : null}>education</a>
          </Link>
        </li>
        <li>
          <Link href="/people">
            <a className={router.pathname === "/people" ? "active" : null}>people</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className={router.pathname === "/news" ? "active" : null}>news</a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a className={router.pathname === "/events" ? "active" : null}>events</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
            >blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
