import ServiceLanding from "components/ServiceLanding";
import { servicePageBySlug } from "lib/seo-pages";

export default function Page() {
  return <ServiceLanding page={servicePageBySlug["automations"]} />;
}
