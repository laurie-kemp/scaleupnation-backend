import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import User from './entity';

@JsonController()
export default class UserController {

  @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
    @Param('id') id: number
  ) {
    return User.findOne(id)
  }

  @Authorized()
  @Get('/users')
  allUsers() {
    return User.find()
  }

  @Post('/users')
  async createUser(
    @Body() user: User
  ) {
    const {password, ...rest} = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }
}

// http post :4000/users firstName="Laurie" lastName="Kemp" email="laurie.kemp@scaleupnation.com" password="Laurie999"

// http post :4000/users firstName="Something" lastName="Else" email="testing4@testing.com" password="123123123"