

const LoginForm = () => {
    // On crée un état qui contiendra un objet. Cet objet sera
    // les valeurs initiales de notre formulaire
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
    });

    const onChange = (newValue, id) => {
        setFormData({
            ...formData,
            [id]: newValue,
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }
        
    return (
        <template>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <Input id="email" onChange={onChange} value={formData.email} />
                        </Col>
                        <Col>
                            <Input id="password" type="password" onChange={onChange} value={formData.email} />
                        </Col>
                        <Col>
                            <Button type="submit">Connexion</Button>
                        </Col>
                    </Row>
                    
                </Form>
        </template>
    );
    };
    export default LoginForm;