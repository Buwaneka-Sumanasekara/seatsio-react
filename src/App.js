
 import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Navigation from "../src/navigation"


const queryClient = new QueryClient()
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
 <Navigation/>
    </QueryClientProvider>
  );
}

export default App;
