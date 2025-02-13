import { Nav, TicketCard } from "../../components";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <div className="page-container">
        <TicketCard />
      </div>
    </div>
  );
}
