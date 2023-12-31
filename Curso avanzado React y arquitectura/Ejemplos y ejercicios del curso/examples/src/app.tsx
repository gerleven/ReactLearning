import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Context } from './context/context'
import { CustomHooks } from './hooks/custom-hooks'
import { UseEffect } from './hooks/use-effect'
import { UseReducer } from './reducer/use-reducer'
import { UseReducerOriginal } from './reducer/use-reducer-original'
import { UseStateImmutable } from './hooks/use-state-immutable'
import { UseReducerWithOptions } from './reducer/use-reducer-with-options'
import { UseReducerRefactor1 } from './reducer/use-reducer-refactor-1'
import { UseReducerRefactor2 } from './reducer/use-reducer-refactor-2'
import { UseReducerRefactor3 } from './reducer/use-reducer-refactor-3'
import { NumericInput } from './forms/numeric-input'
import { BindStyleCustomProperty } from './bind-style-custom-property'
import styles from './app.module.css'
import { Styling } from './styling'
import { ThemeContextComponent } from './context/theme-context'
import { ClassComponent } from './hooks/class-component'
import { AppErrorBoundary } from './error-boundaries/error-boundaries'
import { Timer } from './hooks/timer'
import { UseRef } from './hooks/use-ref'
import { FC } from 'react'
import { UseState } from './hooks/use-state'
//--
import { makeStyles } from '@mui/styles'
import German from './german/German'

const useStyle = makeStyles(theme => {
  return {
    root: {
      padding: '10px',
      width: '150px',
      borderRadius: '10px',
      border: '1px solid #adad44',
      backgroundColor: '#ffff007d',
      fontWeight: 'bold',
    },
    label: {
      padding: '10px',
      width: '150px',
      borderRadius: '10px',
      border: '1px solid #adad44',
      backgroundColor: '#ff00007d',
      fontWeight: 'bold',
    },
  }
})

export const App: FC = () => {
  const myStyles = useStyle()

  return (
    <BrowserRouter>
      <Route path="/" exact>
        <main className={styles.wrapper}>
          <header className={styles.header}>
            <Link to="/german">German</Link>
            <Link to="/use-state">Use State</Link>
            <Link to="/use-state-immutable">Use State Immutable</Link>
            <Link to="/numeric-input">Numeric Input</Link>
            <Link to="/styling">Styling</Link>
            <Link to="/context">Context</Link>
            <Link to="/theme-context">Theme context</Link>
            <Link to="/custom-hooks">Custom Hooks</Link>
            <Link to="/use-effect">Use Effect</Link>
            <Link to="/use-reducer">Use Reducer</Link>
            <Link to="/use-reducer-with-options">Use With options</Link>
            <Link to="/use-reducer-original">Use Reducer Original</Link>
            <Link to="/use-reducer-refactor-1">Use Reducer Refactor 1</Link>
            <Link to="/use-reducer-refactor-2">Use Reducer Refactor 2</Link>
            <Link to="/bind-style-custom-property">Bind Style Custom Property</Link>
            <Link to="/class-component">Class component</Link>
            <Link to="/error-boundary">Error boundary</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/use-ref">Use ref</Link>
          </header>
        </main>
      </Route>
      <Route path="/German">
        <German myStyles={myStyles}></German>
      </Route>
      <Route path="/styling">
        <Styling />
      </Route>
      <Route path="/numeric-input">
        <NumericInput />
      </Route>
      <Route path="/context">
        <Context />
      </Route>
      <Route path="/context">
        <Context />
      </Route>
      <Route path="/theme-context">
        <ThemeContextComponent />
      </Route>
      <Route path="/custom-hooks">
        <CustomHooks />
      </Route>
      <Route path="/use-effect">
        <UseEffect />
      </Route>
      <Route path="/use-reducer">
        <UseReducer />
      </Route>
      <Route path="/use-reducer-with-options">
        <UseReducerWithOptions />
      </Route>
      <Route path="/use-reducer-refactor-1">
        <UseReducerRefactor1 />
      </Route>
      <Route path="/use-reducer-refactor-2">
        <UseReducerRefactor2 />
      </Route>
      <Route path="/use-reducer-refactor-3">
        <UseReducerRefactor3 />
      </Route>
      <Route path="/use-reducer-original">
        <UseReducerOriginal />
      </Route>
      <Route path="/use-state">
        <UseState />
      </Route>{' '}
      <Route path="/use-state-immutable">
        <UseStateImmutable />
      </Route>
      <Route path="/bind-style-custom-property">
        <BindStyleCustomProperty />
      </Route>
      <Route path="/class-component">
        <ClassComponent />
      </Route>
      <Route path="/error-boundary">
        <AppErrorBoundary />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>
      <Route path="/use-ref">
        <UseRef />
      </Route>
    </BrowserRouter>
  )
}
