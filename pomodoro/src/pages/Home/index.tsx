import { Play } from "phosphor-react"
import { Header } from "../../components/Header"
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-sugestions" placeholder="Dê um nome para o seu projeto" />

          <datalist id="task-sugestions">
            <option value="Projeto de React"></option>
            <option value="Projeto de Python"></option>
            <option value="Projeto de C++"></option>
            <option value="Concurso"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minuteAmount"
            placeholder="00" 
            step={5}
            min={0}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>
       
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
      

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
