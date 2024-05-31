import { Accordion } from "react-bootstrap";

function Tentangprodukinikomponen() {
  return (
    <div>
        <Accordion>
									<Accordion.Item eventKey="0">
										<Accordion.Header>
											<b>Tentang Produk Ini</b>
										</Accordion.Header>
										<Accordion.Body>
											The SÖDERHAMN CHAIR is seating for extra support. Lorem
											ipsum dolor sit amet, consectetur adipiscing elit.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
    </div>
  )
}

export default Tentangprodukinikomponen