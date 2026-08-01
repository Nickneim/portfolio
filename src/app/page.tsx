import { routing } from '@/i18n/routing';
import { permanentRedirect } from "next/navigation";


export default function RootPage() {
  permanentRedirect(`/${routing.defaultLocale}`);
}