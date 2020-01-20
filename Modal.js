import {Modal, Button} from 'react-bootstrap/Modal';

function Example(){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);


return(
    <div>
        <Button variant="primary" onClick={handleShow}>Mostrar modal</Button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Encabezado del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Este es el cuerpo del modal
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onCLick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primaty" onClick={handleClose}>
                Guardar
            </Button>
        </Modal.Footer>

    </Modal>
);

}
render(<Example />);