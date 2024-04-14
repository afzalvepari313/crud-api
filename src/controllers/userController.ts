import { Request, Response } from 'express';
import { UserService } from '../services/userService'; // Import user service

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    try {
      const user = await this.userService.getUser(userId);
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
