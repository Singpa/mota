var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a =
{
    "yellowKey": {
       "cls": "tools",
       "name": "随缘小木棍",
       "text": "随手捡的木棍。用来戳开挡路的灌木丛，多走一步路算我输。",
       "hideInToolbox": true
    },
    "blueKey": {
       "cls": "tools",
       "name": "金毛的尾巴",
       "text": "自带温控系统。扫一下，结冰的水坑当场化成洗脚水。",
       "hideInToolbox": true
    },
    "redKey": {
       "cls": "tools",
       "name": "钛合金狗骨头",
       "text": "金毛绝对猜不对的密码钥匙。只有聪明的狐狸才能一秒解锁，里面藏着终极好东西。",
       "hideInToolbox": true
    },
    "redGem": {
       "cls": "items",
       "name": "智商小饼干",
       "text": "给狐狸大脑提速的燃料，攻击+${core.values.redGem}",
       "itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
       "itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.atk += core.values.redGem",
       "canUseItemEffect": "true"
    },
    "blueGem": {
       "cls": "items",
       "name": "摆烂防弹衣",
       "text": "外界干扰防御力提升，防御+${core.values.blueGem}",
       "itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
       "itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.def += core.values.blueGem",
       "canUseItemEffect": "true"
    },
    "greenGem": {
       "cls": "items",
       "name": "免疫大喷雾",
       "text": "喷一下护盾飙升，护盾+${core.values.greenGem}",
       "itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
       "itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.mdef += core.values.greenGem",
       "canUseItemEffect": "true"
    },
    "yellowGem": {
       "cls": "items",
       "name": "野生奇迹果",
       "text": "吃下后全属性提升，可以进行加点",
       "itemEffect": "core.status.hero.hp+=1000;core.status.hero.atk+=6;core.status.hero.def+=6;core.status.hero.mdef+=10;",
       "itemEffectTip": "，全属性提升",
       "useItemEvent": [
          {
             "type": "choices",
             "choices": [
                {
                   "text": "攻击+1",
                   "action": [
                      {
                         "type": "setValue",
                         "name": "status:atk",
                         "operator": "+=",
                         "value": "1"
                      }
                   ]
                },
                {
                   "text": "防御+2",
                   "action": [
                      {
                         "type": "setValue",
                         "name": "status:def",
                         "operator": "+=",
                         "value": "2"
                      }
                   ]
                },
                {
                   "text": "生命+200",
                   "action": [
                      {
                         "type": "setValue",
                         "name": "status:hp",
                         "operator": "+=",
                         "value": "200"
                      }
                   ]
                }
             ]
          }
       ],
       "canUseItemEffect": "true"
    },
    "redPotion": {
       "cls": "items",
       "name": "冰镇西瓜块",
       "text": "甜滋滋的西瓜，吃一口生命+${core.values.redPotion}",
       "itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio",
       "itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.hp += core.values.redPotion",
       "canUseItemEffect": "true"
    },
    "bluePotion": {
       "cls": "items",
       "name": "快乐摸鱼水",
       "text": "咕嘟咕嘟喝下去，生命+${core.values.bluePotion}",
       "itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
       "itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.hp += core.values.bluePotion",
       "canUseItemEffect": "true"
    },
    "yellowPotion": {
       "cls": "items",
       "name": "大号椰子汁",
       "text": "清甜解渴，生命+${core.values.yellowPotion}",
       "itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
       "itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
       "canUseItemEffect": "true"
    },
    "greenPotion": {
       "cls": "items",
       "name": "野生蜂蜜罐",
       "text": "纯天然蜂王浆，生命+${core.values.greenPotion}",
       "itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
       "itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
       "useItemEffect": "core.status.hero.hp += core.values.greenPotion",
       "canUseItemEffect": "true"
    },
    "sword0": {
       "cls": "items",
       "name": "生锈的痒痒挠",
       "text": "一把毫无杀伤力、已经严重生锈的小铁刺",
       "equip": {
          "type": 0,
          "animate": "sword",
          "value": {
             "atk": 0
          }
       },
       "itemEffect": "core.status.hero.atk += 0",
       "itemEffectTip": "，攻击+0"
    },
    "sword1": {
       "cls": "items",
       "name": "坚硬的大股骨",
       "text": "野生防身小骨头，用来驱赶挡路的小动物",
       "equip": {
          "type": 0,
          "animate": "sword",
          "value": {
             "atk": 10
          }
       },
       "itemEffect": "core.status.hero.atk += 10",
       "itemEffectTip": "，攻击+10"
    },
    "sword2": {
       "cls": "items",
       "name": "带刺的倔强灌木棒",
       "text": "一根布满荆棘的粗木棍，打人应该很痛",
       "equip": {
          "type": 0,
          "animate": "sword",
          "value": {
             "atk": 20
          }
       },
       "itemEffect": "core.status.hero.atk += 20",
       "itemEffectTip": "，攻击+20"
    },
    "sword3": {
       "cls": "items",
       "name": "合金反重力铁铲",
       "text": "大自然开路与防身兼备的工兵神铲",
       "equip": {
          "type": 0,
          "animate": "sword",
          "value": {
             "atk": 40
          }
       },
       "itemEffect": "core.status.hero.atk += 40",
       "itemEffectTip": "，攻击+40"
    },
    "sword4": {
       "cls": "items",
       "name": "闪闪发光的狐王大圣剑",
       "text": "传说中智慧狐族统领才能握紧的高贵原野之剑",
       "equip": {
          "type": 0,
          "animate": "sword",
          "value": {
             "atk": 80
          }
       },
       "itemEffect": "core.status.hero.atk += 80",
       "itemEffectTip": "，攻击+80"
    },
    "sword5": {
       "cls": "items",
       "name": "终极不讲理高能激光棒",
       "text": "狐族黑科技顶峰，挥舞时空气都会产生震荡",
       "equip": {
          "type": 0,
          "animate": "sword",
          "value": {
             "atk": 160
          }
       },
       "itemEffect": "core.status.hero.atk += 100",
       "itemEffectTip": "，攻击+100"
    },
    "shield0": {
       "cls": "items",
       "name": "漏风的旧锅盖",
       "text": "一个随时可能会当场碎裂的厨房木锅盖",
       "equip": {
          "type": 1,
          "value": {
             "def": 0
          }
       },
       "itemEffect": "core.status.hero.def += 0",
       "itemEffectTip": "，防御+0"
    },
    "shield1": {
       "cls": "items",
       "name": "合金乌龟壳",
       "text": "沉重但令人安心，穿上它感觉坚不可摧",
       "equip": {
          "type": 1,
          "value": {
             "def": 10
          }
       },
       "itemEffect": "core.status.hero.def += 10",
       "itemEffectTip": "，防御+10"
    },
    "shield2": {
       "cls": "items",
       "name": "野生特制加厚纸板盾",
       "text": "老崔用纸箱板临时糊出来的轻便盾牌，防晒不防雨",
       "equip": {
          "type": 1,
          "value": {
             "def": 20
          }
       },
       "itemEffect": "core.status.hero.def += 20",
       "itemEffectTip": "，防御+20"
    },
    "shield3": {
       "cls": "items",
       "name": "老崔手工打磨大木盾",
       "text": "武器铺老板倾力打造，散发着淡淡的野性橡木清香",
       "equip": {
          "type": 1,
          "value": {
             "def": 40
          }
       },
       "itemEffect": "core.status.hero.def += 40",
       "itemEffectTip": "，防御+40"
    },
    "shield4": {
       "cls": "items",
       "name": "防脸黑钛合金防弹衣",
       "text": "高端大自然防爆材质，能帮你吸收成吨的撞击伤害",
       "equip": {
          "type": 1,
          "value": {
             "def": 80
          }
       },
       "itemEffect": "core.status.hero.def += 80",
       "itemEffectTip": "，防御+80"
    },
    "shield5": {
       "cls": "items",
       "name": "上古圣兽无敌大圆盾",
       "text": "原野遗迹里发掘出来的绝对障壁，附带神秘大自然护盾",
       "equip": {
          "type": 1,
          "value": {
             "def": 100,
             "mdef": 100
          }
       },
       "itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
       "itemEffectTip": "，防御+100，护盾+100"
    },
    "superPotion": {
       "cls": "items",
       "name": "圣水",
       "itemEffect": "core.status.hero.hp *= 2",
       "itemEffectTip": "，生命值翻倍",
       "useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
       "canUseItemEffect": "true",
       "text": "喝下去生命元气值直接疯狂翻倍！"
    },
    "book": {
       "cls": "constants",
       "name": "野生动物生存手册",
       "text": "可以查看当前楼层各怪物属性和弱点",
       "hideInToolbox": true,
       "useItemEffect": "core.ui.drawBook(0);",
       "canUseItemEffect": "true"
    },
    "fly": {
       "cls": "constants",
       "name": "大自然传送罗盘",
       "text": "可以自由往来去过的大自然楼层区域",
       "hideInReplay": true,
       "hideInToolbox": true,
       "useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
       "canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
    },
    "coin": {
       "cls": "constants",
       "name": "笑脸小零钱袋",
       "text": "持有时打败怪物可在大自然里搜刮出双倍金币"
    },
    "freezeBadge": {
       "cls": "constants",
       "name": "降温大冰袋",
       "text": "可以将面前滚烫的熔岩瞬间变成普通的平地",
       "useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
       "canUseItemEffect": "true"
    },
    "cross": {
       "cls": "constants",
       "name": "至尊贴贴勋章",
       "text": "持有后可以打破某些特定首领的无敌庇护属性"
    },
    "dagger": {
       "cls": "constants",
       "name": "锋利的小爪子",
       "text": "虽然现在还没定义，但磨一下指甲能挠人更疼"
    },
    "amulet": {
       "cls": "constants",
       "name": "好运锦鲤护身符",
       "text": "带在身上可以抵御大自然里各种陷阱地形的扣血伤害"
    },
    "bigKey": {
       "cls": "tools",
       "name": "万能开路大棒槌",
       "text": "可以一次性清空当前层所有挡路的小灌木",
       "itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
       "itemEffectTip": "，全钥匙+1",
       "useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor').map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
       "canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
    },
    "greenKey": {
       "cls": "tools",
       "name": "神秘的绿叶子",
       "text": "大自然里的奇怪叶子，能打开隐藏的植物藤蔓门"
    },
    "steelKey": {
       "cls": "tools",
       "name": "铁门老钥匙",
       "text": "一把沾满机油的老式钥匙，刚好能解锁废弃铁门"
    },
    "pickaxe": {
       "cls": "tools",
       "name": "硬核开路铲",
       "text": "可以破坏狐狸面前挡路的顽固墙壁",
       "useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
       "canUseItemEffect": "true"
    },
    "icePickaxe": {
       "cls": "tools",
       "name": "破冰碎碎锤",
       "text": "可以轻松敲碎狐狸面前的一堵反光冰墙",
       "useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n})();",
       "canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
    },
    "bomb": {
       "cls": "tools",
       "name": "降维打击爆竹",
       "text": "可以吓跑狐狸面前拦路的各种讨厌动物怪兽",
       "useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
       "canUseItemEffect": "true"
    },
    "centerFly": {
       "cls": "tools",
       "name": "风眼定位仪",
       "text": "可以瞬间移动到当前地图的镜面中心对称位置",
       "useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
       "canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
    },
    "upFly": {
       "cls": "tools",
       "name": "窜天猴大火箭",
       "text": "直接带狐狸垂直飞往更上一层的相同区域坐标点",
       "useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
       "canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
    },
    "downFly": {
       "cls": "tools",
       "name": "遁地小金铲",
       "text": "直接带狐狸垂直钻往更下一层的相同区域坐标点",
       "useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
       "canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
    },
    "earthquake": {
       "cls": "tools",
       "name": "大自然拆墙震荡波",
       "text": "震碎当前层所有拦路的劣质风化墙壁",
       "useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
       "canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
    },
    "poisonWine": {
       "cls": "tools",
       "name": "大自然野生绿茶",
       "text": "喝一口解毒醒脑，可以解除中毒状态",
       "useItemEffect": "core.triggerDebuff('remove', 'poison');",
       "canUseItemEffect": "core.hasFlag('poison');"
    },
    "weakWine": {
       "cls": "tools",
       "name": "元气粉红果汁",
       "text": "扫清一切疲惫想放假，可以解除衰弱状态",
       "useItemEffect": "core.triggerDebuff('remove', 'weak');",
       "canUseItemEffect": "core.hasFlag('weak');"
    },
    "curseWine": {
       "cls": "tools",
       "name": "净化蓝莓汁",
       "text": "洗净一切坏运气，可以解除诅咒状态",
       "useItemEffect": "core.triggerDebuff('remove', 'curse');",
       "canUseItemEffect": "core.hasFlag('curse');"
    },
    "superWine": {
       "cls": "tools",
       "name": "十全大补汤",
       "text": "一口闷！可以解除所有不良状态",
       "useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
       "canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
    },
    "hammer": {
       "cls": "tools",
       "name": "审判流星锤",
       "text": "这个神秘大铁锤暂时还派不上用场"
    },
    "lifeWand": {
       "cls": "tools",
       "name": "生命灌木权杖",
       "text": "可以恢复100点体力元气值",
       "useItemEvent": [
          {
             "type": "comment",
             "text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
          },
          {
             "type": "function",
             "function": "function(){\ncore.addItem('lifeWand', 1);\n}"
          },
          {
             "type": "playSound",
             "name": "打开界面"
          },
          {
             "type": "input",
             "text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
          },
          {
             "type": "comment",
             "text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
          },
          {
             "type": "if",
             "condition": "flag:input<=item:lifeWand",
             "true": [
                {
                   "type": "setValue",
                   "name": "item:lifeWand",
                   "operator": "-=",
                   "value": "flag:input"
                },
                {
                   "type": "setValue",
                   "name": "status:hp",
                   "operator": "+=",
                   "value": "flag:input*100"
                },
                {
                   "type": "playSound",
                   "name": "回血"
                },
                "成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
             ],
             "false": [
                {
                   "type": "playSound",
                   "name": "操作失败"
                },
                "输入不合法！"
             ]
          }
       ],
       "canUseItemEffect": "true"
    },
    "jumpShoes": {
       "cls": "tools",
       "name": "摸鱼跳跃靴",
       "text": "穿上能直接轻盈跃过前方两格处的各种小障碍",
       "useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
       "canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
    },
    "skill1": {
       "cls": "constants",
       "name": "绝招：小狐狸两分账",
       "text": "可以打开或关闭小狐狸在峡谷里的独门算盘绝活",
       "hideInReplay": true,
       "useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 5; // 技能的需求\n\tvar skillName = '二倍斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
       "canUseItemEffect": "true"
    },
    "wand": {
       "cls": "items",
       "name": "未知发光树枝"
    },
    "pack": {
       "cls": "items",
       "name": "鼓鼓囊囊的小零钱袋",
       "itemEffect": "core.status.hero.money += 500",
       "itemEffectTip": "，金币+500"
    }
}