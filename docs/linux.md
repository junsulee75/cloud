# Linux


## MISC.
#### process
```
[junsulee@fedora dockerfile]$ ps -fax
    PID TTY      STAT   TIME COMMAND
      2 ?        S      0:00 [kthreadd]
      3 ?        I<     0:00  \_ [rcu_gp]
      4 ?        I<     0:00  \_ [rcu_par_gp]
...
```

#### repolist
```
[root@fedora yum.repos.d]# yum repolist
repo id                                                                         repo name
docker-ce-stable                                                                Docker CE Stable - x86_64
fedora                                                                          Fedora 34 - x86_64
fedora-cisco-openh264                                                           Fedora 34 openh264 (From Cisco) - x86_64
fedora-modular                                                                  Fedora Modular 34 - x86_64
updates                                                                         Fedora 34 - x86_64 - Updates
updates-modular                                                                 Fedora Modular 34 - x86_64 - Updates

[root@fedora yum.repos.d]# dnf repolist
repo id                                                                         repo name
docker-ce-stable                                                                Docker CE Stable - x86_64
fedora                                                                          Fedora 34 - x86_64
fedora-cisco-openh264                                                           Fedora 34 openh264 (From Cisco) - x86_64
fedora-modular                                                                  Fedora Modular 34 - x86_64
updates                                                                         Fedora 34 - x86_64 - Updates
updates-modular                                                                 Fedora Modular 34 - x86_64 - Updates
```

## Network

```
[junsulee@fedora dockerfile]$ ss -tunap |grep 4096
tcp   LISTEN 0      4096                 0.0.0.0:5355          0.0.0.0:*           
tcp   LISTEN 0      4096           127.0.0.53%lo:53            0.0.0.0:*           
tcp   LISTEN 0      4096                    [::]:5355             [::]:* 
```

## Security       

#### Enable root login over ssh     

- As root, edit `/etc/ssh/sshd_config`    
- Add a line in the Authentication section of the file that says `PermitRootLogin yes`    
```
...
### Jun Su edit
#PermitRootLogin prohibit-password
PermitRootLogin yes
...
```
- Restart the SSH server: service sshd restart.
```
[root@fedora ~]# service sshd restart
Redirecting to /bin/systemctl restart sshd.service
```
> not working. Check again next restart.     

