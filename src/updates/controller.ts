import { JsonController, Get, Post, HttpCode, Body } from "routing-controllers";
import Update from "./entity";

@JsonController()
export default class UpdateController {

  // @Authorized()
  @Get("/updates")
  allUpdates() {
    return Update.find();
  }

  //@Authorized()
  @Post('/updates')
  @HttpCode(201)
  async createUpdate(@Body() update: Update) {
    await update.save();
    const updates = await Update.find();
    return updates;
  }
}
