import { Service, Inject, Container} from "typedi"
// Interface for user data (optional)
interface User {
    id: number;
    name: string;
  }
  
  export class UserService {
    // Simulate fetching user data from a database (replace with actual logic)
    public async getUser(id: string): Promise<User> {
      return new Promise((resolve) => {
        resolve({ id: parseInt(id), name: 'John Doe' });
      });
    }
  }
  