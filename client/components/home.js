import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Header from './header'



import First from './First'
import Second from './Second'
import Third from './Third'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard/" component={() => <First />} />
            <Route exact path="/dashboard/main" component={() => <Second />} />
            <Route exact path="/dashboard/profile/:user" component={() => <Third />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
