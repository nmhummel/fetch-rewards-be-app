import './styles/App.css'
import CurrentPoints from './components/app/CurrentPoints';
import PayerCompanyPoints from './components/app/PayerCompanyPoints';
import AllTransactions from './components/app/AllTransactions';

import { BoltIcon } from '@heroicons/react/24/outline'
// ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon
// all of this is rendered inside main index.js file

export default function App() {

  return (

    <div className="App">
      <header className="App-header flex flex-row items-center">
        <img className='App-Fetch-Doggie basis-1/6 justify-start' src='/fetch-doggie.png' alt='Fetch Rewards Logo' />
        <h1 className="text-3xl font-bold basis-1/6">
          Hello Doggo!
        </h1>
      </header>

      <div className="py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-fetchYellow sm:text-4xl">
            Your Points Balance
            </p>
            <p className="mt-4 max-w-2xl text-xl w-1/3 text-white lg:mx-auto">
              CURRENT POINTS HERE
              <CurrentPoints />
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                <div className="relative">
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-fetchYellow text-white">
                    <BoltIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-white">PayerCompany List: 'Iterate through all payers and list them below with their points.'</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">Transactions: 'The list of all transactions. Scroll in limited window.'</p>
                </div>
            </div>
            <p className="mt-4 max-w-2xl text-xl w-1/3 text-white lg:mx-auto">
              PayerCompanyPoints HERE
              <PayerCompanyPoints />
            </p>
            <p className="mt-4 max-w-2xl text-xl w-1/3 text-white lg:mx-auto">
              AllTransactions HERE
              <AllTransactions />
            </p>
          </div>
        </div>
      </div>
    </div>
  
  );
}
