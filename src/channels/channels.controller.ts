import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannel() {}

  @Get(':name')
  getSpecificChannel() {}

  @Get(':name/chats')
  getChat(@Query('perPage') perPage, @Query('page') page, @Param() param) {
    console.log(perPage, page);
    console.log(param.name, param.url);
  }

  @Post(':name/chats')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
