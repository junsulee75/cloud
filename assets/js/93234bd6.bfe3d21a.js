"use strict";(self.webpackChunkcloud=self.webpackChunkcloud||[]).push([[3669],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),i=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},l=function(e){var n=i(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=i(r),f=t,k=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?o.createElement(k,d(d({ref:n},l),{},{components:r})):o.createElement(k,d({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,d=new Array(a);d[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,d[1]=c;for(var i=2;i<a;i++)d[i]=r[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),t=(r(7294),r(3905));const a={},d="Docker notes",c={unversionedId:"docker",id:"docker",title:"Docker notes",description:"Installation",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/cloud/docs/docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cp4d",permalink:"/cloud/docs/cp4d/"},next:{title:"kube",permalink:"/cloud/docs/kube"}},s={},i=[{value:"Installation",id:"installation",level:2},{value:"Fedora 34",id:"fedora-34",level:3},{value:"Enable docker to users",id:"enable-docker-to-users",level:4},{value:"Commands reference",id:"commands-reference",level:2},{value:"Containers",id:"containers",level:3},{value:"Containers list",id:"containers-list",level:4},{value:"Remove a container",id:"remove-a-container",level:4},{value:"Image",id:"image",level:3},{value:"Interactive terminal",id:"interactive-terminal",level:4},{value:"docker build",id:"docker-build",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"Prepare <code>Dockerfile</code>",id:"prepare-dockerfile",level:4},{value:"Build",id:"build",level:4},{value:"Network - docker0",id:"network---docker0",level:2},{value:"Docker storage",id:"docker-storage",level:2},{value:"Process",id:"process",level:2}],l={toc:i};function u(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"docker-notes"},"Docker notes"),(0,t.kt)("h2",{id:"installation"},"Installation"),(0,t.kt)("h3",{id:"fedora-34"},"Fedora 34"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora kube]$ sudo su -\n[sudo] password for junsulee: \n\n[root@fedora yum.repos.d]# sudo dnf -y install dnf-plugins-core\nLast metadata expiration check: 0:20:13 ago on Sun 03 Oct 2021 01:55:35 PM AEDT.\nPackage dnf-plugins-core-4.0.21-1.fc34.noarch is already installed.\nDependencies resolved.\nNothing to do.\nComplete!\n\n[root@fedora yum.repos.d]# sudo dnf config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/fedora/docker-ce.repo\n\n[root@fedora yum.repos.d]# ls -tlr\n...\n-rw-r--r--. 1 root root 1919 Oct  3 14:16 docker-ce.repo   <=====\n\n[root@fedora yum.repos.d]# sudo dnf install docker-ce docker-ce-cli containerd.io\n\n\n[root@fedora yum.repos.d]# sudo systemctl start docker\n\n[root@fedora yum.repos.d]# docker login\nLogin with your Docker ID to push and pull images from Docker Hub. If you don\'t have a Docker ID, head over to https://hub.docker.com to create one.\nUsername: wnstn75\nPassword: \nWARNING! Your password will be stored unencrypted in /root/.docker/config.json.\nConfigure a credential helper to remove this warning. See\nhttps://docs.docker.com/engine/reference/commandline/login/#credentials-store\n\nLogin Succeeded\n\n[root@fedora yum.repos.d]# systemctl enable --now docker\nCreated symlink /etc/systemd/system/multi-user.target.wants/docker.service \u2192 /usr/lib/systemd/system/docker.service.\n\n[junsulee@fedora kube]$ sudo systemctl start docker  \n\n[root@fedora yum.repos.d]# systemctl status docker\n\u25cf docker.service - Docker Application Container Engine\n     Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)\n     Active: active (running) since Sun 2021-10-03 14:30:22 AEDT; 36min ago\nTriggeredBy: \u25cf docker.socket\n       Docs: https://docs.docker.com\n   Main PID: 48683 (dockerd)\n      Tasks: 10\n     Memory: 110.9M\n        CPU: 7.342s\n     CGroup: /system.slice/docker.service\n             \u2514\u250048683 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock\n\nOct 03 14:30:20 fedora dockerd[48683]: time="2021-10-03T14:30:20.895441399+11:00" level=info msg="Firewalld: interface docker0 already part of docker zone, returning"\nOct 03 14:30:21 fedora dockerd[48683]: time="2021-10-03T14:30:21.432514438+11:00" level=info msg="Default bridge (docker0) is assigned with an IP address 172.17.0.0/16. Daemon op>\nOct 03 14:30:21 fedora dockerd[48683]: time="2021-10-03T14:30:21.646078722+11:00" level=info msg="Firewalld: interface docker0 already part of docker zone, returning"\nOct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.010146452+11:00" level=info msg="Loading containers: done."\nOct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.029505869+11:00" level=info msg="Docker daemon" commit=75249d8 graphdriver(s)=btrfs version=20.10.8\nOct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.029607429+11:00" level=info msg="Daemon has completed initialization"\nOct 03 14:30:22 fedora systemd[1]: Started Docker Application Container Engine.\nOct 03 14:30:22 fedora dockerd[48683]: time="2021-10-03T14:30:22.127444762+11:00" level=info msg="API listen on /run/docker.sock"\nOct 03 14:31:03 fedora dockerd[48683]: time="2021-10-03T14:31:03.121903401+11:00" level=info msg="ignoring event" container=185e43aa0bcac85f8e01e293eb8b4c7c40753daa2c5b3945d9b133>\nOct 03 14:32:10 fedora dockerd[48683]: time="2021-10-03T14:32:10.815124927+11:00" level=info msg="ignoring event" container=b2d3463833502515da9035c92aaae6c8ec5d123adab6d9e7838c64\n\n\n[junsulee@fedora kube]$ sudo docker run hello-world\n\n')),(0,t.kt)("h4",{id:"enable-docker-to-users"},"Enable docker to users"),(0,t.kt)("p",null,"Make other users be able to run docker commands "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[root@fedora yum.repos.d]# grep docker /etc/group\ndocker:x:974:\n\n[root@fedora yum.repos.d]# usermod -aG docker student\n[root@fedora yum.repos.d]# usermod -aG docker junsulee\n\n[junsulee@fedora kube]$ id\nuid=1000(junsulee) gid=1000(junsulee) groups=1000(junsulee),10(wheel),983(libvirt) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023\n[junsulee@fedora kube]$ newgrp docker\n[junsulee@fedora kube]$ id\nuid=1000(junsulee) gid=974(docker) groups=974(docker),10(wheel),983(libvirt),1000(junsulee) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023\n")),(0,t.kt)("h2",{id:"commands-reference"},"Commands reference"),(0,t.kt)("h3",{id:"containers"},"Containers"),(0,t.kt)("h4",{id:"containers-list"},"Containers list"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora dockerfile]$ docker ps -a\nCONTAINER ID   IMAGE         COMMAND                  CREATED             STATUS                         PORTS     NAMES\n0e25a9aed431   nginx         "/docker-entrypoint.\u2026"   32 minutes ago      Exited (0) 30 minutes ago                lucid_wiles\nb706e36accb1   hello-world   "/hello"                 45 minutes ago      Exited (0) 45 minutes ago                xenodochial_grothendieck\nb2d346383350   ubuntu        "bash"                   About an hour ago   Exited (0) About an hour ago             thirsty_chandrasekhar\n185e43aa0bca   hello-world   "/hello"                 About an hour ago   Exited (0) About an hour ago             distracted_nobel\n9e710e2f8a6b   hello-world   "/hello"                 2 hours ago         Exited (0) 2 hours ago                   gracious_williamson\n')),(0,t.kt)("h4",{id:"remove-a-container"},"Remove a container"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[junsulee@fedora dockerfile]$ docker rm 9e710e2f8a6b\n9e710e2f8a6b\n")),(0,t.kt)("h3",{id:"image"},"Image"),(0,t.kt)("p",null,"Remove images"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora dockerfile]$ docker images\nREPOSITORY    TAG       IMAGE ID       CREATED          SIZE\nnmap          latest    c6ae1cc59ecd   23 minutes ago   381MB\nubuntu        latest    597ce1600cf4   2 days ago       72.8MB\nnginx         latest    f8f4ffc8092c   4 days ago       133MB\nhello-world   latest    feb5d9fea6a5   9 days ago       13.3kB\ncentos        latest    5d0da3dc9764   2 weeks ago      231MB\n[junsulee@fedora dockerfile]$ docker rmi hello-world:latest\nError response from daemon: conflict: unable to remove repository reference "hello-world:latest" (must force) - container b706e36accb1 is using its referenced image feb5d9fea6a5\n[junsulee@fedora dockerfile]$ docker rmi hello-world:latest --force\nUntagged: hello-world:latest\nUntagged: hello-world@sha256:9ade9cc2e26189a19c2e8854b9c8f1e14829b51c55a630ee675a5a9540ef6ccf\nDeleted: sha256:feb5d9fea6a5e9606aa995e879d862b825965ba48de054caab5ef356dc6b3412\n[junsulee@fedora dockerfile]$ \n[junsulee@fedora dockerfile]$ docker images\nREPOSITORY   TAG       IMAGE ID       CREATED          SIZE\nnmap         latest    c6ae1cc59ecd   24 minutes ago   381MB\nubuntu       latest    597ce1600cf4   2 days ago       72.8MB\nnginx        latest    f8f4ffc8092c   4 days ago       133MB\ncentos       latest    5d0da3dc9764   2 weeks ago      231MB\n')),(0,t.kt)("h4",{id:"interactive-terminal"},"Interactive terminal"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[junsulee@fedora dockerfile]$ docker run -it ubuntu /bin/bash\nroot@057b82d3723e:/# \nroot@057b82d3723e:/# \nroot@057b82d3723e:/# ps\n    PID TTY          TIME CMD\n      1 pts/0    00:00:00 bash\n     10 pts/0    00:00:00 ps\n")),(0,t.kt)("h2",{id:"docker-build"},"docker build"),(0,t.kt)("h3",{id:"simple-example"},"Simple example"),(0,t.kt)("h4",{id:"prepare-dockerfile"},"Prepare ",(0,t.kt)("inlineCode",{parentName:"h4"},"Dockerfile")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora dockerfile]$ cat Dockerfile\nFROM centos\nMAINTAINER Sander <mail@sandervanvugt.nl>\n\n# Add repo file\nADD ./sander.repo /etc/yum.repos.d/\n\n# Install cool software\nRUN yum --assumeyes update && \\\nyum --assumeyes install bash nmap iproute && \\\nyum clean all\n\nENTRYPOINT ["/usr/bin/nmap"]\nCMD ["-sn", "172.17.0.0/24"]   \n')),(0,t.kt)("h4",{id:"build"},"Build"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora dockerfile]$ docker build -t nmap .\nSending build context to Docker daemon  3.072kB\nStep 1/6 : FROM centos\nlatest: Pulling from library/cento\n..\nStep 5/6 : ENTRYPOINT ["/usr/bin/nmap"]\n ---\x3e Running in f4cd0017a3ad\nRemoving intermediate container f4cd0017a3ad\n ---\x3e 90e5abc9073d\nStep 6/6 : CMD ["-sn", "172.17.0.0/24"]\n ---\x3e Running in f1a664916088\nRemoving intermediate container f1a664916088\n ---\x3e c6ae1cc59ecd\nSuccessfully built c6ae1cc59ecd\nSuccessfully tagged nmap:latest\n...\n\n')),(0,t.kt)("h2",{id:"network---docker0"},"Network - docker0"),(0,t.kt)("p",null,"Start containers"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora dockerfile]$ docker run -d nginx\n17956e11b52a22d608b6d17c56f13cdc3e72bb9771766c2556f2a7ee1f79ca2d\n[junsulee@fedora dockerfile]$ docker run -d nginx\n35187d3f227aff6b64be33ac0c49ebe359345f600160c747516cefa48d1877af\n\n[junsulee@fedora dockerfile]$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES\n35187d3f227a   nginx     "/docker-entrypoint.\u2026"   22 seconds ago   Up 18 seconds   80/tcp    hungry_shannon\n17956e11b52a   nginx     "/docker-entrypoint.\u2026"   36 seconds ago   Up 32 seconds   80/tcp    elated_proskuriakova\n\n[junsulee@fedora dockerfile]$ docker run nmap\nStarting Nmap 7.70 ( https://nmap.org ) at 2021-10-03 06:58 UTC\nNmap scan report for 172.17.0.1\nHost is up (-0.20s latency).\nMAC Address: 02:42:99:65:8B:1C (Unknown)\nNmap scan report for 172.17.0.2\nHost is up (-0.20s latency).\nMAC Address: 02:42:AC:11:00:02 (Unknown)\nNmap scan report for 172.17.0.3\nHost is up (-0.12s latency).\nMAC Address: 02:42:AC:11:00:03 (Unknown)\nNmap scan report for 67fd5af243a1 (172.17.0.4)\nHost is up.\nNmap done: 256 IP addresses (4 hosts up) scanned in 5.73 seconds\n\n')),(0,t.kt)("p",null,"veth~~  virtual interfaces for two containers.       "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[junsulee@fedora dockerfile]$ ip a\n...\n7: docker0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default \n..\n    inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0\n..\n23: veth46d4d3a@if22: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default \n...\n25: veth319fdf2@if24: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP group default \n...\n")),(0,t.kt)("p",null,"Check IP address of a docker container     "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"[junsulee@fedora dockerfile]$ docker exec -it hungry_shannon /bin/bash\nroot@35187d3f227a:/# ip a\nbash: ip: command not found\nroot@35187d3f227a:/# ifconfig -a\nbash: ifconfig: command not found\nroot@35187d3f227a:/# cd /proc/net\nroot@35187d3f227a:/proc/net# ls\nanycast6   fib_trie  igmp       ip6_tables_matches  ip_tables_matches  mcfilter6     nf_conntrack_expect  raw        rt_acct   sockstat6     udp       wireless\narp    fib_triestat  igmp6      ip6_tables_names    ip_tables_names    netfilter     packet       raw6       rt_cache  softnet_stat  udp6      xfrm_stat\ndev    icmp      ip6_flowlabel  ip6_tables_targets  ip_tables_targets  netlink       protocols        route      snmp      stat      udplite\ndev_mcast  icmp6     ip6_mr_cache   ip_mr_cache     ipv6_route         netstat       psched       rpc        snmp6     tcp       udplite6\ndev_snmp6  if_inet6  ip6_mr_vif ip_mr_vif       mcfilter           nf_conntrack  ptype        rt6_stats  sockstat  tcp6      unix\nroot@35187d3f227a:/proc/net# cat fib_trie\n...\nLocal:\n...\n     +-- 172.17.0.0/16 2 0 2\n        +-- 172.17.0.0/30 2 0 2\n           |-- 172.17.0.0\n              /32 link BROADCAST\n              /16 link UNICAST\n           |-- 172.17.0.3\n              /32 host LOCAL\n        |-- 172.17.255.255\n           /32 link BROADCAST\n")),(0,t.kt)("p",null,"Or by ",(0,t.kt)("inlineCode",{parentName:"p"},"inspect")," option "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'[junsulee@fedora dockerfile]$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS     NAMES\n35187d3f227a   nginx     "/docker-entrypoint.\u2026"   13 minutes ago   Up 13 minutes   80/tcp    hungry_shannon\n17956e11b52a   nginx     "/docker-entrypoint.\u2026"   13 minutes ago   Up 13 minutes   80/tcp    elated_proskuriakova\n[junsulee@fedora dockerfile]$ \n[junsulee@fedora dockerfile]$ docker inspect 35187d3f227a\n..\n        "NetworkSettings": {\n            "Bridge": "",\n...\n            "Ports": {\n                "80/tcp": null\n            },\n...\n            "Gateway": "172.17.0.1",\n...\n            "IPAddress": "172.17.0.3",\n...\n')),(0,t.kt)("h2",{id:"docker-storage"},"Docker storage"),(0,t.kt)("h2",{id:"process"},"Process"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"\n$ ps -fax\n...\n  48209 ?        Ssl    0:04 /usr/bin/containerd\n  48683 ?        Ssl    0:42 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock\n  49800 ?        Ss     0:00 gpg-agent --homedir /var/cache/PackageKit/34/metadata/docker-ce-stable-34-x86_64.tmp/gpgdir --use-standard-socket --daemon\n  51069 ?        Sl     0:00 /usr/bin/containerd-shim-runc-v2 -namespace moby -id 17956e11b52a22d608b6d17c56f13cdc3e72bb9771766c2556f2a7ee1f79ca2d -address /run/containerd/contain\n  51090 ?        Ss     0:00  \\_ nginx: master process nginx -g daemon off;\n  51146 ?        S      0:00      \\_ nginx: worker process\n  51147 ?        S      0:00      \\_ nginx: worker process\n  51182 ?        Sl     0:00 /usr/bin/containerd-shim-runc-v2 -namespace moby -id 35187d3f227aff6b64be33ac0c49ebe359345f600160c747516cefa48d1877af -address /run/containerd/contain\n  51201 ?        Ss     0:00  \\_ nginx: master process nginx -g daemon off;\n  51254 ?        S      0:00      \\_ nginx: worker process\n  51255 ?        S      0:00      \\_ nginx: worker process\n")))}u.isMDXComponent=!0}}]);