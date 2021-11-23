/* eslint-disable */
import {useState} from 'react';
import {useForm} from './hooks/useForm';
import {Input} from './components/Input';
import {Card} from './components/Card'
import {Container} from './components/Container'
import {Button} from './components/Button'

function App() {
    const [usuarios, setUsuarios] = useState([])
    const [form, handleChange, reset] = useForm({
        name: '',
        lastname: '',
        email: ''
    })

    const submit = e => {
        e.preventDefault()
        setUsuarios([
            ...usuarios,
            form,
        ])
        reset()
    }

  return (
      <div style={{marginTop: 20}}>
          <Container>
              <Card>
                  <div style={{padding: 20}}>
                      <form onSubmit={submit}>
                          <Input
                              label={'Nombre '}
                              name={'name'}
                              value={form.name}
                              onChange={handleChange}
                          />
                          <Input
                              label={'Apellido '}
                              name={'lastname'}
                              value={form.lastname}
                              onChange={handleChange}
                          />
                          <Input
                              label={'Correo '}
                              name={'email'}
                              value={form.email}
                              onChange={handleChange}
                          />
                          <Button>Enviar</Button>
                      </form>
                  </div>
              </Card>
              <Card>
                  <ul>
                      {usuarios.map(x =>
                          <li key={x.email}>{`${x.name} ${x.lastname} ${x.email}`}</li>
                      )}
                  </ul>
              </Card>
          </Container>
      </div>
  );
}

export default App;
