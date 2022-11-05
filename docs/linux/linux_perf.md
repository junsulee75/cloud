

# Performance

Blue Diamond related things

## Contents

- [Performance](#performance)
  - [Contents](#contents)
  - [Resources and links](#resources-and-links)
  - [commands](#commands)
    - [Accessbility  and usability](#accessbility--and-usability)
      - [Git](#git)
  - [Reader's comments](#readers-comments)
    - [Replay timeline](#replay-timeline)
  - [Operations](#operations)
    - [git on blue diamond](#git-on-blue-diamond)
      - [ppcle `bapy7602`](#ppcle-bapy7602)
    - [Session #2. 20220303 #scenario 2 #OS (Benny)](#session-2-20220303-scenario-2-os-benny)
    - [Session #3. 20220303 scenario 3 #OS (Benny)](#session-3-20220303-scenario-3-os-benny)
  - [AP team hands-on note](#ap-team-hands-on-note)
    - [Situation 1 : OS](#situation-1--os)
      - [Scenario #1 System is Paging/Swapping](#scenario-1-system-is-pagingswapping)
      - [Webex chat backup](#webex-chat-backup)
      - [Scenario #2 High User CPU](#scenario-2-high-user-cpu)

## Resources and links     

[BD access management](https://bdam.svl.ibm.com/AM/)    => Log in by intranet id / pw.      
[oneticket](https://oneticket.devit.ibm.com) => Open for a problem.  Search by `blu`, then `GDPR` will show up.    
[Sending file to customer](https://w3.ibm.com/w3publisher/db2-client-success/how-we-do/support-process/blue-diamond-need-to-know)       

DB2 tools related path   `/db2_only_data/DB2_TOOLS_LNX/v115m7fp0_linuxamd64_internaltools`     


## commands

Redhat
```
yum -y install sos
sosreport -a --batch
```

SuSe
```
supportconfig -Al
```

```
[CRE-General_User-All_Shared-*-*-AIX_p-zipa7101]
[CRE-General_User-All_Shared-*-*-Linux_x-zixr6601]
[CRE-General_User-All_Shared-*-*-Linux_x-zixr7804]
[CRE-General_User-All_Shared-*-*-Windows_x-zixw1601]
[CRE-General_User-All_Shared-*-*-Windows_x-zixw1602]
[CRE-General_User-All_Shared-*-*-Windows_x-zixw1604]
[CRE-General_User-Restricted-Cloud-DB2LUW-AIX_p-zipa7108]
[CRE-General_User-Restricted-Cloud-DB2LUW-Linux_x-zixr6602]
[STD-General_User-All_Shared-*-*-AIX_p-aixbd05]
[STD-General_User-All_Shared-*-*-FTP_Folder-All_Customers]
[STD-General_User-All_Shared-*-*-Linux_x-aaxr0701]
[STD-General_User-All_Shared-*-*-Windows_x-aaxw1605]
[STD-General_User-BU_Shared-C&CS-DB2LUW-Linux_p-bapy7301]
[STD-General_User-Restricted-Cloud-DB2-Tool-DB2ADM1]
[STD-General_User-Restricted-Cloud-DB2LUW-AIX_p-zrpa7101]
[STD-General_User-Restricted-Cloud-DB2LUW-AIX_p-zrpa7102]
[STD-General_User-Restricted-Cloud-DB2LUW-Linux_x-zrxr6601]
[STD-General_User-Restricted-Cloud-DB2LUW-Solaris_s-zrsl1101]
[STD-General_User-Restricted-Cloud-DB2LUW-Tool-BDClearCaseUDBUnix]
```

### Accessbility  and usability  


#### Git
- [ ] `baxr7801` for linuxamd64    => Error         
- [X] `bapy7602` for ppcle64le        


## Reader's comments

### Replay timeline  
- This series are presented by APD mates by group. ( Rajib, Benny and Kamil)    
- It seems documents in the [link](https://github.ibm.com/DB2-APD/Education/tree/master/Perf_Advanced) will be upddate adding topics continuously.    
  So, I recommend to check the docs in regular basis.      
  (Cloning the git repository is also good idea. I am doing that.)

- Check the table of contents from docs before jumping into replay videos.    
  That would be the trailer what may be discussed.    

- You may use the doc as a handbook or adding to your note based on what you leanred newly.    
- Excercise uses fyre stencil.     
- Hands-on outputs on this page referred APD Rajib's doc in DB2-APD/education github.     

## Operations
### git on blue diamond     

Basically, few systems which runs Db2 development containers.      
[Reference page in playbood](https://pages.github.ibm.com/DB2/db2-dev-playbook/support/bd.html?highlight=blue%20diamond)    




#### ppcle `bapy7602`      

- Check if `docker` group is set.    
  If not, ask `BD admin` to add.       
```

-sh-4.2$ hostname
bapy7602

-sh-4.2$ id
uid=15671(junsule) gid=50384(bdudbcc) groups=50384(bdudbcc),12042(domain users),  12047(urhelbd01),50003(db2adm1),50006(uaixbd05),50216(uzixr6601),50220(uzipa7101  ),50400(uzixr6602),50401(uzrxr6601),50405(uzrpa7101),50406(uzipa7108),50602(usrc  itrixstd),50620(usrcitrixcre),50650(uzrsl1101),50746(ubapy7301),50804(uaaxr0701)  ,50822(uzrpa7102),50846(uzixr7804) context=unconfined_u:unconfined_r:unconfined_  t:s0-s0:c0.c1023

```


### [Session #2. 20220303 #scenario 2 #OS (Benny)](https://ibm.ent.box.com/file/941459653487?s=bey62x3sl1b8zw6l4z1dl5veb68jy3qb)
 
- (05:16~ ) Session 1 recap. 
  To see as MB, `vmstat -S M -w 5`      
- (16:13 ~ ) Finding process consuming CPU   
```
ps -o pid,user,%mem,command ax | sort -b -k3 -r
```  

### [Session #3. 20220303 scenario 3 #OS (Benny)](https://ibm.ent.box.com/file/941465225796?s=wu4by98xlanxpef353vp662dt6kwf57r)



- [Go to content](#Contents)

## AP team hands-on note  
### Situation 1 : OS

#### Scenario #1 System is Paging/Swapping
> Test system : lumenal1.fyre.ibm.com , UID = root ( Ask password to Jun Su or Guo Dong )

- Reboot to start from clean status

- Run vmstat on terminal 1 before starting problem and monitor.       
```
# vmstat -w 1
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 ...
 0  0            0      6366004         2108      1397888    0    0     0     2  186  156   0   0 100   0   0
 0  0            0      6366004         2108      1397888    0    0     0     0  144  108   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     0  146  104   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     8  152  103   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     0  149  103   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     0  152  103   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     0  158  112   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     0  147  104   0   0 100   0   0
 0  0            0      6366020         2108      1397888    0    0     0     0  149  103   0   0 100   0   0
 6  0            0      4986688         2108      1535772    0    0   184    25  513  305   2   4  94   0   0
 1  2      3477248       104068            0       203828   58 349994  1215 350004 35052 5594  11  45   9  36   0    <=== 
 3  5      8852224       104440            0       307580   20 535345   281 535345 62310 7953   8  53   6  33   0
 3  6     13828352       103092            0       269812   40 499186   102 499186 63651 10080   7  57   2  34   0
 8  3     15826024       103644            0       191624  489 499072  2120 499084 65229 11408   9  63   0  28   0
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 8  1       612740       103000            0       229804  153 175743  2530 175745 25921 6498  11  45  33  11   0
```

> Check which users : cat /etc/passwd   # search for users starting recipe


- Switch user 

```
[root@lumenal1 ~]# su - recipe1
Last login: Wed May 25 19:11:36 PDT 2022 on pts/1

==================================================

This recipe1 is simulating a Paging situation

Start by using the command: vmstat -S M -w 5 or vmstat command you like to gauge the situation on the system

Refer to the document: AnalyzingAndDebuggingPerfProblems.docx and go over the vmstat column section to understand the output

After that check the Red Flags section in the document and see if any of those red flags match what you are seeing here

Try and get the commands you can use from the document to use and then

 Try and answer the following questions:
	1.Which user is using the most memory?
	2.How much swap memory is being used?
	3.Do you see variation in free memory on the box?
	4.Which process(es) are driving the swap memory usage?
	5.Was the OOM-Killer invoked? How will you find it out? (Hint: Use dmesg)
	6.After you log out, do you still see Swap memory usage? If yes, find out which process(es) is/are still using the swap memory.

Feel free to go back to the reference document and Answer Key

The answer key and reference document is available at:

Box: https://ibm.box.com/s/9fa79a1hdbbyaqdcy8yrfh02b0unia40

Github: https://github.ibm.com/DB2-APD/Education/tree/master/Perf_Advanced

==================================================
```


- Sense what might be running under the user.   ( `prog4` ?)
```
[recipe1@lumenal1 ~]$ ps
  PID TTY          TIME CMD
31012 pts/1    00:00:00 bash
31035 pts/1    00:00:00 bash
31316 pts/1    00:00:00 prog4
31317 pts/1    00:00:00 sleep
31334 pts/1    00:00:07 prog4
31335 pts/1    00:00:07 prog4
31346 pts/1    00:00:00 ps
```

> C Source : pegmem_Linux.c 

- Sense what is triggered swithcing to this user    
```bash
[recipe1@lumenal1 ~]$ cat .bashrc
# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

perl /.scripts/print_banner.pl recipe1 

( nohup /.scripts/run_prog4 > /dev/null 2>&1 & )
..
```

- Find out the `red flags`    

```
$ top
..
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
32270 recipe1   20   0 1335416   1.1g    248 R  56.0 14.2   0:01.68 prog4
32271 recipe1   20   0 1028216 956548  34860 R  44.7 11.9   0:01.34 prog4
32273 recipe1   20   0 1028216 969484  47796 R  44.3 12.1   0:01.33 prog4
32269 recipe1   20   0  925816 838044  18756 R  39.3 10.5   0:01.18 prog4
32268 recipe1   20   0  925816 788416    252 R  37.7  9.8   0:01.13 prog4
32272 recipe1   20   0  823416 644828    248 R  31.3  8.1   0:00.94 prog4
32166 recipe1   20   0  162124   1008    648 R   0.3  0.0   0:00.29 top
```

1. Which user is using the most memory `ps aux`    
```
[recipe1@lumenal1 ~]$ ps aux|awk '{ print $1" "$4; }'|sort |perl -ne 'chomp($_); @arr=split(/\s+/,$_); $user=$arr[0]; $pct=$arr[1]; $hash{$user} += $pct; END{ foreach $user( sort { $hash{$b} <=> $hash{$a} } keys %hash){ $val = $hash{$user}; printf("%30s => %6s\n", $user, $val); } }'
                       recipe1 =>     90
                           ntp =>      0
                           rpc =>      0
                       polkitd =>      0
                          root =>      0
                          USER =>      0
                          dbus =>      0
```

interested colum %MEM -> split by space.-> save to array -> print by order

2. How much swap memoryt is being used  ?
```
[recipe1@lumenal1 ~]$ free -h
              total        used        free      shared  buff/cache   available
Mem:           7.6G        7.2G        100M        296M        322M         30M
Swap:           15G         11G        4.1G
```

3. Do you see variation in free memory on the box ?
```
watch free -h
```

4. Which processes are driving the swap memory usage ? 

```
[recipe1@lumenal1 ~]$ ps aux | head -n 1 ; ps aux | sort -rnk 4|head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe1   1599 35.2 16.7 2666616 1345028 pts/2 R    19:50   0:06 /.scripts/prog4 6
recipe1   1597 37.5 16.3 2564216 1306444 pts/2 R    19:50   0:06 /.scripts/prog4 6
recipe1   1600 35.3 15.7 2666616 1262372 pts/2 R    19:50   0:06 /.scripts/prog4 6
recipe1   1595 37.5 14.8 2769016 1186984 pts/2 R    19:50   0:06 /.scripts/prog4 6
recipe1   1596 36.6 14.1 2564216 1135236 pts/2 R    19:50   0:06 /.scripts/prog4 6
recipe1   1598 35.3 12.8 2257016 1032812 pts/2 R    19:50   0:06 /.scripts/prog4 6
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
rpc        711  0.0  0.0  69256    20 ?        Ss   May18   0:01 /sbin/rpcbind -w
root       923  0.0  0.0      0     0 ?        S    19:41   0:00 [kworker/3:2]
root       922  0.0  0.0      0     0 ?        S    19:41   0:00 [kworker/u8:1]
```

```
[recipe1@lumenal1 ~]$ ps aux --sort -%mem | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe1   1666 65.4 44.3 4919416 3553764 pts/2 R    19:50   0:07 /.scripts/prog4 2
recipe1   1667 65.9 43.7 4817016 3506916 pts/2 R    19:50   0:07 /.scripts/prog4 2
recipe1   1684  0.0  0.0 155588  1968 pts/2    R+   19:51   0:00 ps aux --sort -%mem
recipe1    425  0.0  0.0 115544   824 pts/2    S    19:35   0:00 -bash
root      1321  0.0  0.0 586424   780 ?        Ssl  May18   1:12 /usr/bin/python2 -Es /usr/sbin/tuned -l -P
recipe1   1685  0.0  0.0 108064   680 pts/2    S+   19:51   0:00 head -n 10
root         1  0.0  0.0  51764   572 ?        Ss   May18   2:22 /usr/lib/systemd/systemd --switched-root --system --deserialize 22
root       655  0.0  0.0 1544016  424 ?        Sl   May18   1:52 falcon-sensor
root     30163  0.0  0.0 152704   380 pts/0    S+   18:54   0:01 vmstat -w 10
```
```
[recipe1@lumenal1 ~]$ top -c -b -n 1 -o +%MEM
top - 19:51:46 up 7 days, 13:26,  2 users,  load average: 4.92, 4.91, 4.54
Tasks: 161 total,  12 running, 149 sleeping,   0 stopped,   0 zombie
%Cpu(s):  5.7 us, 53.7 sy,  0.0 ni,  8.1 id, 27.6 wa,  0.0 hi,  4.9 si,  0.0 st
KiB Mem :  8008632 total,   103188 free,  7617788 used,   287656 buff/cache
KiB Swap: 16773116 total,  8004092 free,  8769024 used.    31332 avail Mem 

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
 1768 recipe1   20   0 2257016   1.0g    248 R  20.3 13.7   0:05.04 /.scripts/+
 1764 recipe1   20   0 2154616 993652  39084 R  11.9 12.4   0:05.12 /.scripts/+
 1765 recipe1   20   0 2052216 957080  79800 R   6.8 12.0   0:04.54 /.scripts/+
 1762 recipe1   20   0 2052216 947788  10312 R  10.2 11.8   0:04.51 /.scripts/+
 1763 recipe1   20   0 2359416 915048    248 R  11.9 11.4   0:05.26 /.scripts/+
 1767 recipe1   20   0 1949816 906052  54660 R   6.8 11.3   0:04.45 /.scripts/+
 1766 recipe1   20   0 1949816 814128  24036 R   6.8 10.2   0:04.61 /.scripts/+
 1769 recipe1   20   0 1949816 792884  60996 R   5.1  9.9   0:04.48 /.scripts/+
 1783 recipe1   20   0  162136   2192   1616 R   0.0  0.0   0:00.08 top -c -b +
 1321 root      20   0  586424    812    340 S   0.0  0.0   1:12.61 /usr/bin/p+
  425 recipe1   20   0  115544    768    564 S   0.0  0.0   0:00.27 -bash
    1 root      20   0   51764    752    520 S   0.0  0.0   2:22.40 /usr/lib/s+

```

5. Was the OOM-Killer invoked? How will you find it out?  

```
[recipe1@lumenal1 ~]$ dmesg | grep -i killer 
[650819.810820] prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
[650825.823637] prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
[650988.142427] falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[651141.398440] falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[651148.567848] falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[651303.150807] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[651310.151571] prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[651466.149885] prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[651628.140960] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[651635.151448] prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
[651789.962089] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[651796.935745] prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
[651953.153022] prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[651960.144949] prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
[652113.193703] prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
[652119.625988] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[652272.128827] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[652279.151914] falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[652597.152401] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[652604.144386] prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[652758.141355] systemd invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[652765.137828] prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[653040.190108] pkill invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
[653084.143985] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
[653244.616146] prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
```

```
[recipe1@lumenal1 ~]$ sudo grep -i killer /var/log/messages
May 25 19:12:16 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
May 25 19:12:21 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
May 25 19:15:04 lumenal1 kernel: falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:17:37 lumenal1 kernel: falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:17:44 lumenal1 kernel: falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:20:19 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:20:26 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:23:02 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:25:44 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:25:51 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
May 25 19:28:26 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:28:33 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
May 25 19:31:09 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:31:16 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
May 25 19:33:49 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x280da, order=0, oom_score_adj=0
May 25 19:33:55 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:36:28 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:36:35 lumenal1 kernel: falcon-sensor invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:41:53 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:42:00 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:44:34 lumenal1 kernel: systemd invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:44:41 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:49:16 lumenal1 kernel: pkill invoked oom-killer: gfp_mask=0x201da, order=0, oom_score_adj=0
May 25 19:50:00 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
May 25 19:52:40 lumenal1 kernel: prog4 invoked oom-killer: gfp_mask=0x200da, order=0, oom_score_adj=0
```

6.	After you log out, do you still see Swap memory usage? If yes, find out which process(es) is/are still using the swap memory  

```
[recipe1@lumenal1 ~]$ exit
logout
```

Memory usage decreases.   
```

# vmstat -w 1
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 9  9     16218476       103116            0       157124   64 639751   154 639751 61814 9748   9  67   1  23   0
 0  0        72868      7599104            0       236804  172 71895  1594 71907 7809 1725   2  22  73   3   0
 9  1      2053500       104836            0       422144   82 201048    83 201048 19698 2217  11  35  48   6   0
 1  7      8332332       102904            0       284520   58 627830    73 627830 75925 8275   9  64   1  26   0
 1  6     14496940       103460            0       287976   50 613714   140 613716 73324 8295   9  66   0  25   0
 4  6     16274848       103024            0        97432  292 480072  2349 480096 66993 12737   8  69   2  21   0
 0  0        68044      7798424            0        38668  250 44982  3163 44982 9889 2454   3  25  70   1   0
 0  0        67968      7794084            0        42796   16    0    16     1  190  168   0   0 100   0   0
 0  0        67836      7793116            0        43968   13    0   130     0  181  166   0   0 100   0   0


 [root@lumenal1 ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:           7.6G        167M        7.4G        1.9M         42M        7.3G
Swap:           15G         66M         15G

```


Processes using swap space   
```
[root@lumenal1 ~]# egrep "Name|VmSwap" /proc/*/status|awk '{ if( match($0,"Name:")){ split($1,arr,"/",seps); pid=arr[3]; name=$NF;} if(match($0,"VmSwap:")){ printf("[%8d] %-30s %10s (kb)\n", pid, name, $(NF-1)); } }'|sort -k4nr|head -n 15
[     655] falcon-sensor                       14524 (kb)
[    1321] tuned                               12932 (kb)
[     714] polkitd                              6624 (kb)
[    1326] rsyslogd                             2548 (kb)
[    1264] dhclient                             2180 (kb)
[    1125] dhclient                             1972 (kb)
[   32718] sshd                                 1304 (kb)
[   30128] sshd                                 1288 (kb)
[    1323] sshd                                 1040 (kb)
[       1] systemd                              1012 (kb)
[     538] systemd-udevd                         788 (kb)
[     720] ntpd                                  636 (kb)
[     708] dbus-daemon                           604 (kb)
[     748] crond                                 580 (kb)
[     734] gssproxy                              516 (kb)
```

- (homework) Which process is using highest memory ?       

#### Webex chat backup   

```
from YUKI TERAI (IBM) to Everyone:    4:23  PM
/proc/*/status
from YUKI TERAI (IBM) to Everyone:    4:25  PM
grep VmSwap /proc/*/status | sort -k 2 -nr
from SEOKHWAN CHOI (IBM) to Everyone:    4:27  PM
top -b -d 1  | tee -a top_`date +%Y%m%d_%H%M%S`.out
from JUN SU LEE (IBM) to Everyone:    4:30  PM
ps aux|awk '{ print $1" "$4; }'|sort |perl -ne 'chomp($_); @arr=split(/\s+/,$_); $user=$arr[0]; $pct=$arr[1]; $hash{$user} += $pct; END{ foreach $user( sort { $hash{$b} <=> $hash{$a} } keys %hash){ $val = $hash{$user}; printf("%30s => %6s\n", $user, $val); } }'
from MASATO SADACHIKA (IBM) to Everyone:    4:31  PM
I sometimes use procinfo -H for checking the memory usage.
from YUKI TERAI (IBM) to Everyone:    4:39  PM
grep VmSwap /proc/*/status | sort -k 2 -nr
from JUN SU LEE (IBM) to Everyone:    4:52  PM
egrep "Name|VmSwap" /proc/*/status|awk '{ if( match($0,"Name:")){ split($1,arr,"/",seps); pid=arr[3]; name=$NF;} if(match($0,"VmSwap:")){ printf("[%8d] %-30s %10s (kb)\n", pid, name, $(NF-1)); } }'|sort -k4nr|head -n 15
from FU FEI XU (IBM) to Everyone:    4:52  PM
printf 'Computing swap usage...\n';
swap_usages="$(
    SUM=0
    OVERALL=0
    for DIR in `find /proc/ -maxdepth 1 -type d -regex "^/proc/[0-9]+"`
    do
        PID="$(printf '%s' "$DIR" | cut -d / -f 3)"
        PROGNAME=`ps -p $PID -o comm --no-headers`
        for SWAP in `grep VmSwap $DIR/status 2>/dev/null | awk '{ print $2 }'`
        do
            let SUM=$SUM+$SWAP
        done
        if (( $SUM > 0 )); then
            printf "$SUM KB ($PROGNAME) swapped PID=$PID\\n"
        fi
        let OVERALL=$OVERALL+$SUM
        SUM=0
        break
    done
    printf '!!!! Overall swap used: %s KB\n' "$OVERALL"
)"
printf '%s' "$swap_usages" | sort -nk1
from JUN SU LEE (IBM) to Everyone:    4:55  PM
Which process is using highest memory ?
from FU FEI XU (IBM) to Everyone:    5:00  PM
vm.swappiness
min_free_kbytes
```

- [Go to content](#Contents)

#### Scenario #2 High User CPU  
> Test system : lumenal1.fyre.ibm.com , UID = root ( Ask password to Jun Su or Guo Dong )

```
[root@lumenal1 ~]# su - recipe2
Last login: Thu Feb 24 16:45:12 PST 2022 on pts/0

==================================================

This recipe2 is simulating a High User CPU situation

Start by using the command: vmstat -S M -w 5 or vmstat command you like to gauge the situation on the system

Refer to the document: AnalyzingAndDebuggingPerfProblems.docx and go over the vmstat column section to understand the output

After that check the Red Flags section in the document and see if any of those red flags match what you are seeing here

Try and get the commands you can use from the document to use and then

 Try and answer the following questions:
	1.How many CPU cores are on the box?
	2.What is the difference between a socket, core and thread? How many sockets, cores and threads are on your server?
	3.What the Load averages for 1 min, 15 min time period?
	4.Is the problem intermittent?
	5.What process is driving the high CPU usage?
	6.What are the user calls which are driving the CPU usage?
	7.After you logout, does the system go back to normal?

Feel free to go back to the reference document and Answer Key

The answer key and reference document is available at:

Box: https://ibm.box.com/s/9fa79a1hdbbyaqdcy8yrfh02b0unia40

Github: https://github.ibm.com/DB2-APD/Education/tree/master/Perf_Advanced
```


1.How many CPU cores are on the box?
```
[recipe2@lumenal1 ~]$ lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    1
Core(s) per socket:    1
Socket(s):             4
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 85
Model name:            Intel Xeon Processor (Skylake, IBRS)
Stepping:              4
CPU MHz:               2400.004
BogoMIPS:              4800.00
Virtualization:        VT-x
Hypervisor vendor:     KVM
Virtualization type:   full
L1d cache:             32K
L1i cache:             32K
L2 cache:              4096K
L3 cache:              16384K
NUMA node0 CPU(s):     0-3
Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl xtopology eagerfpu pni pclmulqdq vmx ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm avx512f avx512dq rdseed adx smap clflushopt clwb avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 arat umip pku ospke md_clear spec_ctrl intel_stibp arch_capabilities

[recipe2@lumenal1 ~]$ lscpu |grep "^CPU(s)"
CPU(s):                4
```

```

[recipe2@lumenal1 ~]$ cat /proc/cpuinfo |grep "processor"
processor	: 0
processor	: 1
processor	: 2
processor	: 3
```




2.What is the difference between a socket, core and thread? How many sockets, cores and threads are on your server?     

```
[root@lumenal1 ~]# dmidecode
# dmidecode 3.2
Getting SMBIOS data from sysfs.
SMBIOS 2.8 present.
13 structures occupying 632 bytes.
Table at 0xBFFFFD80.

Handle 0x0000, DMI type 0, 24 bytes
BIOS Information
	Vendor: SeaBIOS
	Version: 1.13.0-1ubuntu1.1
	Release Date: 04/01/2014
	Address: 0xE8000
	Runtime Size: 96 kB
	ROM Size: 64 kB
	Characteristics:
		BIOS characteristics not supported
		Targeted content distribution is supported
	BIOS Revision: 0.0

Handle 0x0100, DMI type 1, 27 bytes
System Information
	Manufacturer: QEMU
	Product Name: Standard PC (i440FX + PIIX, 1996)
	Version: pc-i440fx-focal
	Serial Number: Not Specified
	UUID: ca158c60-5fa9-49e6-9f5c-20da15d57e63
	Wake-up Type: Power Switch
	SKU Number: Not Specified
	Family: Not Specified

Handle 0x0300, DMI type 3, 22 bytes
Chassis Information
	Manufacturer: QEMU
	Type: Other
	Lock: Not Present
	Version: pc-i440fx-focal
	Serial Number: Not Specified
	Asset Tag: Not Specified
	Boot-up State: Safe
	Power Supply State: Safe
	Thermal State: Safe
	Security Status: Unknown
	OEM Information: 0x00000000
	Height: Unspecified
	Number Of Power Cords: Unspecified
	Contained Elements: 0
	SKU Number: Not Specified

Handle 0x0400, DMI type 4, 42 bytes
Processor Information
	Socket Designation: CPU 0
	Type: Central Processor
	Family: Other
	Manufacturer: QEMU
	ID: 54 06 05 00 FF FB 8B 0F
	Version: pc-i440fx-focal
	Voltage: Unknown
	External Clock: Unknown
	Max Speed: 2000 MHz
	Current Speed: 2000 MHz
	Status: Populated, Enabled
	Upgrade: Other
	L1 Cache Handle: Not Provided
	L2 Cache Handle: Not Provided
	L3 Cache Handle: Not Provided
	Serial Number: Not Specified
	Asset Tag: Not Specified
	Part Number: Not Specified
	Core Count: 1
	Core Enabled: 1
	Thread Count: 1
	Characteristics: None

Handle 0x0401, DMI type 4, 42 bytes
Processor Information
	Socket Designation: CPU 1
	Type: Central Processor
	Family: Other
	Manufacturer: QEMU
	ID: 54 06 05 00 FF FB 8B 0F
	Version: pc-i440fx-focal
	Voltage: Unknown
	External Clock: Unknown
	Max Speed: 2000 MHz
	Current Speed: 2000 MHz
	Status: Populated, Enabled
	Upgrade: Other
	L1 Cache Handle: Not Provided
	L2 Cache Handle: Not Provided
	L3 Cache Handle: Not Provided
	Serial Number: Not Specified
	Asset Tag: Not Specified
	Part Number: Not Specified
	Core Count: 1
	Core Enabled: 1
	Thread Count: 1
	Characteristics: None

Handle 0x0402, DMI type 4, 42 bytes
Processor Information
	Socket Designation: CPU 2
	Type: Central Processor
	Family: Other
	Manufacturer: QEMU
	ID: 54 06 05 00 FF FB 8B 0F
	Version: pc-i440fx-focal
	Voltage: Unknown
	External Clock: Unknown
	Max Speed: 2000 MHz
	Current Speed: 2000 MHz
	Status: Populated, Enabled
	Upgrade: Other
	L1 Cache Handle: Not Provided
	L2 Cache Handle: Not Provided
	L3 Cache Handle: Not Provided
	Serial Number: Not Specified
	Asset Tag: Not Specified
	Part Number: Not Specified
	Core Count: 1
	Core Enabled: 1
	Thread Count: 1
	Characteristics: None

Handle 0x0403, DMI type 4, 42 bytes
Processor Information
	Socket Designation: CPU 3
	Type: Central Processor
	Family: Other
	Manufacturer: QEMU
	ID: 54 06 05 00 FF FB 8B 0F
	Version: pc-i440fx-focal
	Voltage: Unknown
	External Clock: Unknown
	Max Speed: 2000 MHz
	Current Speed: 2000 MHz
	Status: Populated, Enabled
	Upgrade: Other
	L1 Cache Handle: Not Provided
	L2 Cache Handle: Not Provided
	L3 Cache Handle: Not Provided
	Serial Number: Not Specified
	Asset Tag: Not Specified
	Part Number: Not Specified
	Core Count: 1
	Core Enabled: 1
	Thread Count: 1
	Characteristics: None

Handle 0x1000, DMI type 16, 23 bytes
Physical Memory Array
	Location: Other
	Use: System Memory
	Error Correction Type: Multi-bit ECC
	Maximum Capacity: 8 GB
	Error Information Handle: Not Provided
	Number Of Devices: 1

Handle 0x1100, DMI type 17, 40 bytes
Memory Device
	Array Handle: 0x1000
	Error Information Handle: Not Provided
	Total Width: Unknown
	Data Width: Unknown
	Size: 8192 MB
	Form Factor: DIMM
	Set: None
	Locator: DIMM 0
	Bank Locator: Not Specified
	Type: RAM
	Type Detail: Other
	Speed: Unknown
	Manufacturer: QEMU
	Serial Number: Not Specified
	Asset Tag: Not Specified
	Part Number: Not Specified
	Rank: Unknown
	Configured Memory Speed: Unknown
	Minimum Voltage: Unknown
	Maximum Voltage: Unknown
	Configured Voltage: Unknown

Handle 0x1300, DMI type 19, 31 bytes
Memory Array Mapped Address
	Starting Address: 0x00000000000
	Ending Address: 0x000BFFFFFFF
	Range Size: 3 GB
	Physical Array Handle: 0x1000
	Partition Width: 1

Handle 0x1301, DMI type 19, 31 bytes
Memory Array Mapped Address
	Starting Address: 0x00100000000
	Ending Address: 0x0023FFFFFFF
	Range Size: 5 GB
	Physical Array Handle: 0x1000
	Partition Width: 1

Handle 0x2000, DMI type 32, 11 bytes
System Boot Information
	Status: No errors detected

Handle 0x7F00, DMI type 127, 4 bytes
End Of Table
```

3.What the Load averages for 1 min, 15 min time period? 

for the past 1, 5, and 15 minutes.    
```
[root@lumenal1 ~]# uptime
 19:34:28 up 11 days,  1:24,  3 users,  load average: 7.86, 6.52, 3.61
```



4. Is the problem intermittent?    
YES 
```
[recipe2@lumenal1 ~]$ vmstat -S M -w 5 
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 7  0           59         7394            0          237    0    0     1     7    9    2   0   0 100   0   0
 2  0           59         7394            0          237    0    0     0     0 2068   73  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2060   67  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     1 2067   69  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2056   56  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     4 2060   59  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2057   57  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2074   81  50   0  50   0   0
 2  0           59         7394            0          237    0    0    14     0 2075   82  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0    27 2147  150  50   0  49   0   0
 2  0           59         7394            0          237    0    0     0     0 2085  104  50   0  50   0   0
 6  0           59         7394            0          237    0    0     2     2 2310  141  55   0  45   0   0
 6  0           59         7394            0          237    0    0     0     0 4070  286 100   0   0   0   0
 6  0           59         7394            0          237    0    0     0     0 4072  294 100   0   0   0   0
 6  0           59         7394            0          237    0    0     0     0 4089  293 100   0   0   0   0
 6  0           59         7394            0          237    0    0     3     4 4080  296 100   0   0   0   0
 6  0           59         7394            0          237    0    0     0     0 4086  294 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4107  322 100   0   0   0   0
20  0           59         7394            0          237    0    0     0     0 4116  429 100   0   0   0   0
20  0           59         7394            0          237    0    0     0     0 4160  439 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4139  434 100   0   0   0   0
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
22  0           59         7394            0          237    0    0     0     3 4200  433 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4148  418 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4108  415 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4155  412 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4125  418 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4159  414 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4138  425 100   0   0   0   0
21  0           59         7394            0          237    0    0     0     0 4135  411 100   0   0   0   0
 0  0           59         7394            0          237    0    0     0     0 3837  413  92   0   8   0   0
 0  0           59         7394            0          237    0    0     0     0   88   71   0   0 100   0   0
 2  0           59         7394            0          237    0    0     0     0  250   84   4   0  96   0   0
 2  0           59         7394            0          237    0    0     0     0 2064   69  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2071   78  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2071   72  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2067   73  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2069   69  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2082   91  50   0  50   0   0
 2  0           59         7394            0          237    0    0     2     0 2181  147  51   0  48   0   0
 2  0           59         7394            0          237    0    0     0     4 2075   80  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2084   85  50   0  50   0   0
 2  0           59         7394            0          237    0    0     0     0 2069   74  50   0  50   0   0
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 3  0           59         7394            0          237    0    0     0     0 2071   69  50   0  50   0   0
 9  0           59         7386            0          240    0    0   782     0 2412  262  54   1  45   0   0
 6  0           59         7389            0          240    0    0     2     0 4129  304 100   0   0   0   0
 6  0           59         7389            0          240    0    0     0    47 4083  282 100   0   0   0   0
 6  0           59         7389            0          240    0    0     0     0 4089  286 100   0   0   0   0
 8  0           59         7388            0          240    0    0     0     0 4104  311 100   0   0   0   0
 6  0           59         7388            0          240    0    0     0     0 4080  293 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4115  319 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     2 4093  431 100   0   0   0   0
20  0           59         7387            0          240    0    0     0    79 4131  440 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4117  434 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4124  432 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4120  429 100   0   0   0   0
21  0           59         7387            0          240    0    0     0     0 4101  436 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4083  429 100   0   0   0   0
20  0           59         7387            0          240    0    0     0    14 4120  412 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4101  405 100   0   0   0   0
21  0           59         7387            0          240    0    0     0     0 4122  406 100   0   0   0   0
20  0           59         7387            0          240    0    0     0     0 4089  403 100   0   0   0   0
...
```

5.What process is driving the high CPU usage?

```
[root@lumenal1 recipe2]# top -c -b -o +%CPU | head -20
top - 19:39:32 up 11 days,  1:29,  3 users,  load average: 11.00, 9.02, 5.46
Tasks: 160 total,   1 running, 155 sleeping,   4 stopped,   0 zombie
%Cpu(s): 49.3 us,  3.0 sy,  0.0 ni, 47.8 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  8008600 total,  7564016 free,   196864 used,   247720 buff/cache
KiB Swap: 16773116 total, 16711956 free,    61160 used.  7576848 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
32453 recipe2   20   0   22900    392    312 S 193.8  0.0   0:20.96 /.scripts/+
    1 root      20   0   51900   2408   1472 S   0.0  0.0   3:22.06 /usr/lib/s+
    2 root      20   0       0      0      0 S   0.0  0.0   0:00.15 [kthreadd]
    4 root       0 -20       0      0      0 S   0.0  0.0   0:00.00 [kworker/0+
...
```

```
[root@lumenal1 recipe2]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe2  32551  413  0.0 170428   656 pts/1    Sl   19:40   0:28 /.scripts/prog1 20
root         1  0.0  0.0  51900  2408 ?        Ss   May28   3:22 /usr/lib/systemd/systemd --switched-root --system --deserialize 22
root         2  0.0  0.0      0     0 ?        S    May28   0:00 [kthreadd]
root         4  0.0  0.0      0     0 ?        S<   May28   0:00 [kworker/0:0H]
root         6  0.0  0.0      0     0 ?        S    May28   0:00 [ksoftirqd/0]
root         7  0.0  0.0      0     0 ?        S    May28   0:00 [migration/0]
root         8  0.0  0.0      0     0 ?        S    May28   0:00 [rcu_bh]
root         9  0.0  0.0      0     0 ?        R    May28   3:38 [rcu_sched]
root        10  0.0  0.0      0     0 ?        S<   May28   0:00 [lru-add-drain]
```

```
[root@lumenal1 ~]# ps H -eo user,pid,ppid,tid,time,%cpu,cmd --sort=-%cpu
...
```

> $ cat .bashrc 
...
( nohup /.scripts/run_prog1 > /dev/null 2>&1 & )
...

6.What are the user calls which are driving the CPU usage?

```
[root@lumenal1 ~]# pstack 16075
Thread 21 (Thread 0x7f23b5d4b700 (LWP 16077)):
#0  0x0000000000400aa5 in waste_some_cpu ()
#1  0x0000000000400a77 in use_usr_cpu ()
#2  0x00007f23b6121ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f23b5e4ab0d in clone () from /lib64/libc.so.6
Thread 20 (Thread 0x7f23b554a700 (LWP 16078)):
#0  0x0000000000400a9e in waste_some_cpu ()
#1  0x0000000000400a77 in use_usr_cpu ()
#2  0x00007f23b6121ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f23b5e4ab0d in clone () from /lib64/libc.so.6
...
```