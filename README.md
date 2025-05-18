# 简介
[Shadowrocket配置](https://raw.githubusercontent.com/mybeXX/Backup/main/Conf/Shadowrocket.conf) 

[Loon配置](https://raw.githubusercontent.com/mybeXX/Backup/main/Conf/Loon.conf) 

[Clash（mihomo内核）配置](https://raw.githubusercontent.com/mybeXX/Backup/main/Conf/Clash.yaml) 

Clash配置需要自行配置节点和代理组
```yaml
proxy-providers:
  Sub1:
    type: http
    url: 
    interval: 3600
    path: ./proxy_providers/Sub1.yaml
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600
    override:
      additional-prefix: '[Sub1]'

  Sub2:
    type: http
    url: 
    interval: 3600
    path: ./proxy_providers/Sub2.yaml
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600
    override:
      additional-prefix: '[Sub2]'

  Sub3:
    type: http
    url: 
    interval: 3600
    path: ./proxy_providers/Sub3.yaml
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600
    override:
      additional-prefix: '[Sub3]'

proxy-groups:
  - name: 🚀 节点选择
    type: select
    use:
      - Sub1
      - Sub2
      - Sub3
    filter: "^(?!.*?(使用|更新|剩余|到期|不可|官|失联))"

  - name: Ⓜ️ 微软服务
    type: select
    proxies: 
      - DIRECT
      - 🚀 节点选择
```


## 致谢
本项目的数据主要来源于项目 [@Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules) 和 [@Loyalsoldier/surge-rules](https://github.com/Loyalsoldier/surge-rules) 和 [@blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script) 和 [@217heidai/adblockfilters](https://github.com/217heidai/adblockfilters) 和 [@ACL4SSR/ACL4SSR](https://github.com/ACL4SSR/ACL4SSR/tree/master) 和  [@Loyalsoldier/geoip](https://github.com/Loyalsoldier/geoip) 

