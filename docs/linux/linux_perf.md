

# Blue diamond related things    

Blue Diamond related things

## Contents

- [Blue diamond related things](#blue-diamond-related-things)
  - [Contents](#contents)
  - [Resources and links](#resources-and-links)
  - [commands](#commands)
    - [Accessbility  and usability](#accessbility--and-usability)
      - [Linuxamd64](#linuxamd64)
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
      - [Scenario #3 High System CPU](#scenario-3-high-system-cpu)
      - [Scenario #4 Mix of high usr and sys CPU](#scenario-4-mix-of-high-usr-and-sys-cpu)
      - [Scenario #5 High sys cpu and runq but not 100% cpu](#scenario-5-high-sys-cpu-and-runq-but-not-100-cpu)
    - [Situation 2 : Db2](#situation-2--db2)
      - [Scenario #1 Slow running query](#scenario-1-slow-running-query)
      - [Scenario #2 Slow stored procedure](#scenario-2-slow-stored-procedure)
  - [MISC.](#misc)

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

#### Linuxamd64
- [ ] `zrxr6601.msci.svl.ibm.com` . Old Default. Not access
- [X] `zrxr6601.msci.svl.ibm.com` . New Default     
  - User the profile `. ~/.bash_profile`      
  - ` /db2_only_data/DB2_TOOLS_LNX` : mounted      
  - `db2reset` does not work due to OS library      
- [X] `zrxr7601.msci.svl.ibm.com`    
  - Enter userid. Then logged in without password prompt.     
  - `/db2_only_data/DB2_TOOLS_LNX` is not mounted.  If a tool is necessary, copy over from `zrxr7601` using scp.   
  ```
   scp junsule@zrxr6601.msci.svl.ibm.com:/db2_only_data/DB2_TOOLS_LNX/v115m7fp0_linuxamd64_internaltools.tar .
  ```      
  Hold on, db2reset get the the following error    
  ```
  [junsule@zrxr7601 SQL00001]$ db2reset -path MEMBER0000

  ... 
  Failed to retrieve system configuration!


  ```        
  - Customer data `/standard` is not mounted.       

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

```
$ sudo perf top    
Samples: 190K of event 'cpu-clock', 4000 Hz, Event count (approx.): 35123648295
Overhead  Shared Object        Symbol
  99.01%  prog1                [.] waste_some_cpu
   0.26%  prog1                [.] use_usr_cpu
   0.04%  libc-2.17.so         [.] _int_malloc
   0.04%  [kernel]             [k] vsnprintf
   0.03%  libc-2.17.so         [.] _int_free
   0.03%  perf                 [.] rb_next
   0.02%  [kernel]             [k] format_decode
   0.02%  libc-2.17.so         [.] __GI_____strtoull_l_internal
   0.02%  perf                 [.] perf_mmap__consume
   0.02%  [kernel]             [k] kallsyms_expand_symbol.constprop.1
   0.02%  [kernel]             [k] clear_page_c_e
   0.02%  [kernel]             [k] number.isra.2
   0.01%  perf                 [.] perf_evsel__parse_sample
   0.01%  libc-2.17.so         [.] __strcmp_sse42
   0.01%  [kernel]             [k] module_get_kallsym
   0.01%  perf                 [.] perf_hpp__is_dynamic_entry
   0.01%  perf                 [.] 0x000000000004ce96
   0.01%  perf                 [.] __dso__load_kallsyms
   0.01%  [kernel]             [k] __memcpy
   0.01%  [kernel]             [k] strnlen
   0.01%  libc-2.17.so         [.] malloc
```

> for CPU profiling running a command : perf stat
```
jshadr1:~/test # perf stat /usr/sbin/rsct/sapolicies/db2/hadrV10_monitor.ksh.org v10_01 v10_01 SAMPLE

 Performance counter stats for '/usr/sbin/rsct/sapolicies/db2/hadrV10_monitor.ksh.org v10_01 v10_01 SAMPLE':

        854.109936 task-clock                #    1.081 CPUs utilized         
             1,312 context-switches          #    0.002 M/sec                 
               578 CPU-migrations            #    0.001 M/sec                 
           179,555 page-faults               #    0.210 M/sec                 
 3,399,466,613,201 cycles                    # 3980.128 GHz                   
     <not counted> stalled-cycles-frontend
     <not counted> stalled-cycles-backend 
 3,399,466,613,201 instructions              #    1.00  insns per cycle       
 3,399,466,613,201 branches                  # 3980127.698 M/sec                 
 3,399,466,613,201 branch-misses             #  100.00% of all branches       

       0.790458744 seconds time elapsed
```
or
```
### collection
perf record -o perf_record.out <command>
### formatting
perf report -f -i perf_record.out -stdio
```

> need to install
```
[root@lumenal1 recipe2]# rpm -qa |grep perf
python-perf-3.10.0-1160.66.1.el7.x86_64
perf-3.10.0-1160.66.1.el7.x86_64  ## <==========
```
7.After you logout, does the system go back to normal?      
YES       

- [Go to content](#Contents)


#### Scenario #3 High System CPU     
1.Which program is driving the high %sys cpu? 
```
[recipe3@lumenal1 ~]$ vmstat -w 5
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 5  0        37352      6216828            0      1565004    0    1     1     3    1    1   0   0 100   0   0
10  0        37352      6215392            0      1565004    0    0     0     0 4029  868  16  82   2   0   0
 8  0        37352      6215264            0      1565004    0    0     0    66 4042  844  16  84   0   0   0
 9  0        37352      6215116            0      1565004    0    0     0     0 4036  849  17  83   0   0   0
 6  0        37352      6215296            0      1565004    0    0     0     0 4046  856  16  84   0   0   0
10  0        37352      6215364            0      1565004    0    0     0     0 4045  850  15  85   0   0   0
...

[root@lumenal1 ~]# top -c -b -o +%CPU | head -20
top - 20:06:48 up 25 days,  1:57,  3 users,  load average: 14.20, 5.16, 1.90
Tasks: 155 total,   3 running, 152 sleeping,   0 stopped,   0 zombie
%Cpu(s):  1.5 us,  9.2 sy,  0.0 ni, 89.2 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  8008600 total,  6216256 free,   227340 used,  1565004 buff/cache
KiB Swap: 16773116 total, 16735764 free,    37352 used.  7500784 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
15486 recipe3   20   0   22900    396    312 S  26.7  0.0   0:00.04 /.scripts/+
    1 root      20   0   51900   2668   1512 S   0.0  0.0   7:41.42 /usr/lib/s+
...

[root@lumenal1 ~]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe3  15511  456  0.0  55684   652 pts/1    Sl   20:07   0:04 /.scripts/prog2 6
root         1  0.0  0.0  51900  2668 ?        Ss   May28   7:41 /usr/lib/systemd/systemd --switched-root --system --deserialize 22
...

```

Program name : `prog2`     

2.Which call is taking up most CPU ticks?    

```

$ sudo perf top      
Samples: 574K of event 'cpu-clock', 4000 Hz, Event count (approx.): 57946233645
Overhead  Shared Object        Symbol
   7.81%  libpthread-2.17.so   [.] __libc_close
   6.89%  [kernel]             [k] system_call_after_swapgs
   6.41%  libpthread-2.17.so   [.] 0x000000000000eefd
   5.80%  [kernel]             [k] down_read
   4.76%  [kernel]             [k] cshook_security_inode_free_security
   3.85%  [kernel]             [k] cshook_security_file_free_security
   3.66%  [kernel]             [k] lockref_put_or_lock
   3.47%  [kernel]             [k] _raw_qspin_lock
   2.91%  [kernel]             [k] __do_softirq
   2.14%  [kernel]             [k] zero_key+0x8000000115a5
   2.11%  [kernel]             [k] cshook_network_ops_inet6_sockraw_recvmsg
   1.97%  [kernel]             [k] fget
   1.65%  [kernel]             [k] native_queued_spin_lock_slowpath
   1.61%  [kernel]             [k] lockref_get
   1.51%  [kernel]             [k] get_empty_filp
   1.50%  [kernel]             [k] __fput
   1.36%  [kernel]             [k] fsnotify
   1.31%  [kernel]             [k] lockref_get_not_dead
   1.30%  [kernel]             [k] do_dentry_open
   1.27%  [kernel]             [k] cshook_network_ops_inet6_sockraw_release
   1.27%  [kernel]             [k] cshook_systemcalltable_pre_ia32_pread64
```

3.Show the stack which is driving the high CPU?    

open64() and close()     
```
[root@lumenal1 ~]# pstack 15678
Thread 7 (Thread 0x7f24b5acf700 (LWP 15680)):
#0  0x00007f24b5eacefd in open64 () from /lib64/libpthread.so.0
#1  0x0000000000400b48 in use_sys_cpu ()
#2  0x00007f24b5ea5ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f24b5bceb0d in clone () from /lib64/libc.so.6
Thread 6 (Thread 0x7f24b52ce700 (LWP 15681)):
#0  0x00007f24b5eac7bd in close () from /lib64/libpthread.so.0
#1  0x0000000000400b55 in use_sys_cpu ()
#2  0x00007f24b5ea5ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f24b5bceb0d in clone () from /lib64/libc.so.6
Thread 5 (Thread 0x7f24b4acd700 (LWP 15682)):
#0  0x00007f24b5eacefd in open64 () from /lib64/libpthread.so.0
#1  0x0000000000400b48 in use_sys_cpu ()
#2  0x00007f24b5ea5ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f24b5bceb0d in clone () from /lib64/libc.so.6
Thread 4 (Thread 0x7f24b42cc700 (LWP 15683)):
#0  0x00007f24b5eacefd in open64 () from /lib64/libpthread.so.0
#1  0x0000000000400b48 in use_sys_cpu ()
#2  0x00007f24b5ea5ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f24b5bceb0d in clone () from /lib64/libc.so.6
Thread 3 (Thread 0x7f24b3acb700 (LWP 15684)):
#0  0x00007f24b5eacefd in open64 () from /lib64/libpthread.so.0
#1  0x0000000000400b48 in use_sys_cpu ()
#2  0x00007f24b5ea5ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f24b5bceb0d in clone () from /lib64/libc.so.6
Thread 2 (Thread 0x7f24b32ca700 (LWP 15685)):
#0  0x00007f24b5eac7bd in close () from /lib64/libpthread.so.0
#1  0x0000000000400b55 in use_sys_cpu ()
#2  0x00007f24b5ea5ea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007f24b5bceb0d in clone () from /lib64/libc.so.6
Thread 1 (Thread 0x7f24b62cf740 (LWP 15678)):
#0  0x00007f24b5ea7017 in pthread_join () from /lib64/libpthread.so.0
#1  0x0000000000400adf in main ()    
```

Collect stacks of the process into a file      
```
[root@lumenal1 ~]# sudo tail -n +1 /proc/15755/task/*/stack  > 3_3.txt

```

Upload recent analysstack.   
```
jsmacpro16:dataAnalysisTools kr050496$ git remote -v
origin	https://github.ibm.com/junsulee/BetaToolsForSupport.git (fetch)
origin	https://github.ibm.com/junsulee/BetaToolsForSupport.git (push)
upstream	https://github.ibm.com/rsarkar/BetaToolsForSupport.git (fetch)
upstream	https://github.ibm.com/rsarkar/BetaToolsForSupport.git (push)
jsmacpro16:dataAnalysisTools kr050496$ git fetch upstream master
From https://github.ibm.com/rsarkar/BetaToolsForSupport
 * branch            master     -> FETCH_HEAD
jsmacpro16:dataAnalysisTools kr050496$ git pull upstream master
From https://github.ibm.com/rsarkar/BetaToolsForSupport
 * branch            master     -> FETCH_HEAD
Already up to date.

jsmacpro16:dataAnalysisTools kr050496$ scp analyzestack root@lumenal1.fyre.ibm.com:/tmp


```

Run analyzestack  

```

[root@lumenal1 work]# /tmp/analyzestack -input 3_3.txt -depth 40 -taskstack -output StackAnalysis.out
Processed 3_3.txt ..
Analyzing stacks ..

Demangling Functions ..
.......

Finished Processing.

Please check file: StackAnalysis.out
```

StackAnalysis.out  

```
Stack:
----------

 [<ffffffffbc197f78>] call_rwsem_down_read_failed + 0x18/0x30
 [<ffffffffc09982b0>] cshook_security_inode_free_security + 0x210/0x8c40 [falcon_lsm_serviceable]
 [<ffffffffc0a092e8>] cshook_network_ops_inet6_sockraw_recvmsg + 0x18f88/0x21ca0 [falcon_lsm_serviceable]
 [<ffffffffc0994cc6>] cshook_security_file_free_security + 0x3786/0x6b60 [falcon_lsm_serviceable]
 [<ffffffffc09943c3>] cshook_security_file_free_security + 0x2e83/0x6b60 [falcon_lsm_serviceable]
 [<ffffffffc0996776>] cshook_security_file_free_security + 0x5236/0x6b60 [falcon_lsm_serviceable]
 [<ffffffffc0a0c869>] cshook_network_ops_inet6_sockraw_recvmsg + 0x1c509/0x21ca0 [falcon_lsm_serviceable]
 [<ffffffffc09c3b6e>] cshook_systemcalltable_pre_close + 0x1e/0x20 [falcon_lsm_serviceable]
 [<ffffffffc094ab90>] unload_network_ops_symbols + 0x67a0/0x6a90 [falcon_lsm_pinned_13601]
 [<ffffffffbc599f92>] system_call_fastpath + 0x25/0x2a

 8 stack(s) found in:

 15755.15757 - 3_3.txt
 15755.15759 - 3_3.txt
 15755.15761 - 3_3.txt
 15755.15762 - 3_3.txt
 15755.15764 - 3_3.txt
 15755.15765 - 3_3.txt
 15755.15770 - 3_3.txt
 15755.15773 - 3_3.txt

Stack:
----------

 [<ffffffffbc197f78>] call_rwsem_down_read_failed + 0x18/0x30
 [<ffffffffc09982b0>] cshook_security_inode_free_security + 0x210/0x8c40 [falcon_lsm_serviceable]
 [<ffffffffc0a092e8>] cshook_network_ops_inet6_sockraw_recvmsg + 0x18f88/0x21ca0 [falcon_lsm_serviceable]
 [<ffffffffc0994cc6>] cshook_security_file_free_security + 0x3786/0x6b60 [falcon_lsm_serviceable]
 [<ffffffffc0994270>] cshook_security_file_free_security + 0x2d30/0x6b60 [falcon_lsm_serviceable]
 [<ffffffffc09915b4>] cshook_security_file_free_security + 0x74/0x6b60 [falcon_lsm_serviceable]
 [<ffffffffc094291b>] pinnedhook_security_file_free_security + 0x3b/0x60 [falcon_lsm_pinned_13601]
 [<ffffffffbc1091ec>] security_file_free + 0x1c/0x20
 [<ffffffffbc050614>] __fput + 0xf4/0x230
 [<ffffffffbc05083e>] ____fput + 0xe/0x10
 [<ffffffffbbec2acb>] task_work_run + 0xbb/0xe0
 [<ffffffffbbe2cc65>] do_notify_resume + 0xa5/0xc0
 [<ffffffffbc59a2ef>] int_signal + 0x12/0x17

 3 stack(s) found in:

 15755.15758 - 3_3.txt
 15755.15760 - 3_3.txt
 15755.15763 - 3_3.txt
 ...
```

- [Go to content](#Contents)

#### Scenario #4 Mix of high usr and sys CPU    

```
[recipe4@lumenal1 ~]$ vmstat -S M -w 5
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 4  0           73         7364            0          259    0    0     1    11    3    1   0   0  99   0   0
 2  0           73         7364            0          259    0    0     0     3 2220  431  29  20  50   0   0
 2  0           73         7364            0          259    0    0     0     0 2231  474  29  21  50   0   0
 2  0           73         7364            0          259    0    0     0     0 2238  558  29  21  50   0   0
 2  0           73         7364            0          259    0    0     0     0 2244  543  29  20  50   0   0
 2  0           73         7364            0          259    0    0     0     0 2202  481  29  20  50   0   0
 2  0           73         7364            0          259    0    0     0     7 2218  457  30  19  50   0   0
 6  0           73         7364            0          259    0    0     0     0 20326 48572  51  42   7   0   0
 6  0           73         7364            0          259    0    0     0     1 23925 57223  54  45   1   0   0
 6  0           73         7364            0          259    0    0     0     0 23736 57890  54  45   1   0   0
 6  0           73         7364            0          259    0    0     0     0 23232 57787  54  45   1   0   0
 7  0           73         7364            0          259    0    0     0     0 23373 56179  54  45   1   0   0
 6  0           73         7364            0          259    0    0     0     7 24041 58388  54  45   1   0   0
20  0           73         7360            0          259    0    0     0     0 36127 37879  53  47   0   0   0
21  0           73         7360            0          259    0    0     0     0 38290 35463  52  48   0   0   0
```
1.Which program is driving the high system cpu?     

```
[root@lumenal1 opt]# top -b -c -o +%CPU|head -n 20
top - 20:58:13 up 25 days,  2:48,  3 users,  load average: 12.12, 9.97, 8.13
Tasks: 155 total,   1 running, 152 sleeping,   2 stopped,   0 zombie
%Cpu(s): 54.9 us, 45.1 sy,  0.0 ni,  0.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  8008600 total,  7535812 free,   207524 used,   265264 buff/cache
KiB Swap: 16773116 total, 16698096 free,    75020 used.  7565692 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
20017 recipe4   20   0  171452   4740    508 S 344.4  0.1   2:44.79 /.scripts/prog3 20
...

[root@lumenal1 opt]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe4  20102  211  0.0  23924   392 pts/1    Sl   20:58   0:27 /.scripts/prog3 2
..
```

`shmat` function.   
```
$ sudo perf top   
root         2  0.0  0.0      0     0 ?        S    May28   0:00 [kthreadd]
Samples: 47K of event 'cpu-clock', 4000 Hz, Event count (approx.): 10532667894 lost: 0/0 drop: 0/0
Overhead  Shared Object       Symbol
  28.88%  libc-2.17.so        [.] __GI___shmat
  24.17%  [kernel]            [k] system_call_after_swapgs
  11.31%  libc-2.17.so        [.] __random
   6.93%  libc-2.17.so        [.] __lll_unlock_wake_private
   6.46%  [kernel]            [k] __do_softirq
   3.98%  libc-2.17.so        [.] __lll_lock_wait_private
```

To double check and confirms,     

Top CPU cosumer process.     
```
[root@lumenal1 opt]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe4  20387  409  0.0 171452   652 pts/1    Sl   21:02   1:54 /.scripts/prog3 20
```

Check stack.     
```
[root@lumenal1 opt]# pstack 20387
Thread 21 (Thread 0x7fc960927700 (LWP 20389)):
#0  0x00007fc960a283c7 in shmat () from /lib64/libc.so.6
#1  0x0000000000400b4a in use_sys_cpu ()
#2  0x00007fc960cfdea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007fc960a26b0d in clone () from /lib64/libc.so.6
Thread 20 (Thread 0x7fc960126700 (LWP 20390)):
#0  0x00007fc960a283c7 in shmat () from /lib64/libc.so.6
#1  0x0000000000400b4a in use_sys_cpu ()
#2  0x00007fc960cfdea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007fc960a26b0d in clone () from /lib64/libc.so.6
Thread 19 (Thread 0x7fc95f925700 (LWP 20391)):
#0  0x00007fc960a283c7 in shmat () from /lib64/libc.so.6
#1  0x0000000000400b4a in use_sys_cpu ()
#2  0x00007fc960cfdea5 in start_thread () from /lib64/libpthread.so.0
#3  0x00007fc960a26b0d in clone () from /lib64/libc.so.6
...
```

Also collect process stack and run analyzestack.      
```
[root@lumenal1 work]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe4  20934  393  0.0 171452   652 pts/1    Sl   21:10   1:03 /.scripts/prog3 20
...
[root@lumenal1 work]# sudo tail -n +1 /proc/20934/task/*/stack  > 4_1.txt

[root@lumenal1 work]# /tmp/analyzestack -input 4_1.txt -depth 40 -taskstack -output 4_1_stack.out
Processed 4_1.txt ..
Analyzing stacks ..

Demangling Functions ..
.

Finished Processing.

Please check file: 4_1_stack.out

[root@lumenal1 work]# more 4_1_stack.out

Stack:
----------

 [<ffffffffbbf12956>] futex_wait_queue_me + 0xc6/0x130
 [<ffffffffbbf1371b>] futex_wait + 0x17b/0x280
 [<ffffffffbbf153d6>] do_futex + 0x106/0x4d0
 [<ffffffffbbf15820>] SyS_futex + 0x80/0x190
 [<ffffffffbc599f92>] system_call_fastpath + 0x25/0x2a

 17 stack(s) found in:

 20934.20934 - 4_1.txt
 20934.20937 - 4_1.txt
 20934.20938 - 4_1.txt
 20934.20939 - 4_1.txt
 20934.20940 - 4_1.txt
 20934.20941 - 4_1.txt
 20934.20942 - 4_1.txt
 20934.20943 - 4_1.txt
 20934.20944 - 4_1.txt
 20934.20945 - 4_1.txt
 20934.20946 - 4_1.txt
 20934.20947 - 4_1.txt
 20934.20948 - 4_1.txt
 20934.20949 - 4_1.txt
 20934.20950 - 4_1.txt
 20934.20951 - 4_1.txt
 20934.20953 - 4_1.txt
```

System call seems to be waiting.      
Checking on kernel side .      
Analyzestack will use `-dmesgstack` option.    

```
[root@lumenal1 work]# echo 1 > /proc/sys/kernel/sysrq
[root@lumenal1 work]# echo "t" > /proc/sysrq-trigger
[root@lumenal1 work]# dmesg > dmesg.stack.4_1

[root@lumenal1 work]# /tmp/analyzestack -input dmesg.stack.4_1 -depth 40 -dmesgstack -output 4_1_dmesg_stack.out
Finished processing file: dmesg.stack.4_1
Analyzing stacks ..

Processing Complete
Please check 4_1_dmesg_stack.out

```

dmesg stack patterns .   

```
Stack:
----------

 [<ffffffffbc58c3d9>] schedule+0x29/0x70
 [<ffffffffbbf12956>] futex_wait_queue_me+0xc6/0x130
 [<ffffffffbbf1371b>] futex_wait+0x17b/0x280
 [<ffffffffbbedaedb>] ? wake_up_q+0x5b/0x80
 [<ffffffffbbf12e05>] ? futex_wake_op+0x3b5/0x640
 [<ffffffffbbf153d6>] do_futex+0x106/0x4d0
 [<ffffffffbc594678>] ? __do_page_fault+0x238/0x500
 [<ffffffffbbf15820>] SyS_futex+0x80/0x190
 [<ffffffffbc599f92>] system_call_fastpath+0x25/0x2a

    2 stack(s) found in:

        dmesg.stack.4_1 -  evnet           S ffff9ef233b0d780     0 24997    638 0x00000080
        dmesg.stack.4_1 -  lfodown         S ffff9ef2356b0000     0 24999    638 0x00000080

Stack:
----------

 [<ffffffffbc58c3d9>] schedule+0x29/0x70
 [<ffffffffbc58b81d>] schedule_hrtimeout_range_clock+0x12d/0x150
 [<ffffffffbc09d409>] ? ep_scan_ready_list.isra.7+0x1b9/0x1f0
 [<ffffffffbc58b853>] schedule_hrtimeout_range+0x13/0x20
 [<ffffffffbc09d69e>] ep_poll+0x23e/0x360
 [<ffffffffbbedaf20>] ? wake_up_state+0x20/0x20
 [<ffffffffbc09eb55>] SyS_epoll_wait+0xd5/0x100
 [<ffffffffbc599f92>] system_call_fastpath+0x25/0x2a

```

It is waiting to attach to the object/segment.     


2.Which call is taking up most CPU ticks in user space?     

`shamat`.       

```
sudo perf top

  23.40%  [kernel]             [k] system_call_after_swapgs    <=== kernel
  20.66%  libc-2.17.so         [.] __GI___shmat                <=== user
  10.72%  libc-2.17.so         [.] __lll_unlock_wake_private
   9.38%  libc-2.17.so         [.] __random
   8.49%  libc-2.17.so         [.] __lll_lock_wait_private
   3.21%  [kernel]             [k] _raw_spin_unlock_irqrestore
   2.46%  libc-2.17.so         [.] __random_r
   2.26%  [kernel]             [k] futex_wait_setup
...
```
3.Which call is taking up most CPU ticks in kernel space?

As above in 2.    

```
system_call_after_swapgs
```

4.Show the stack which is driving the high CPU ( both usr and sys )?    

Refer pstack for `usr` and dmesg for `sys`      

program name : `prog3`     
Usr CPU : from `pstack`, `use_sys_cpu` function.            
SYS CPU : from `dmesg`,  `shmat` kernel system call.      

- [Go to content](#Contents) 

#### Scenario #5 High sys cpu and runq but not 100% cpu    

```
[root@lumenal1 ~]# su - recipe5
Last login: Wed Jun 22 20:44:08 PDT 2022 on pts/1

==================================================

This recipe5 is simulating a High System CPU and High run-q but NOT 100% CPU situation

Start by using the command: vmstat -S M -w 5 or vmstat command you like to gauge the situation on the system

Refer to the document: AnalyzingAndDebuggingPerfProblems.docx and go over the vmstat column section to understand the output

After that check the Red Flags section in the document and see if any of those red flags match what you are seeing here

Try and get the commands you can use from the document to use and then

 Try and answer the following questions:
	1.What is the system call consuming the most system CPU ticks?
	2.Are there any I/O calls happening?
	3.How many threads are in 'D' state? Is it growing? Why are you seeing these threads in 'D' state? (Hint: Take stacks)
	4.Which function is showing up for the threads in 'D' state?
	5.What are 1 min, 5 min Load averages?

Feel free to go back to the reference document and Answer Key

The answer key and reference document is available at:

Box: https://ibm.box.com/s/9fa79a1hdbbyaqdcy8yrfh02b0unia40

Github: https://github.ibm.com/DB2-APD/Education/tree/master/Perf_Advanced

```

Sys CPU usage is high.    
```
[recipe5@lumenal1 ~]$ vmstat -S M -w 5
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
11  0            0         6944            2          626    0    0     0     0    4   26   0   0 100   0   0
 2  0            0         6943            2          626    0    0     0     0 4996 3136   9  80  11   0   0
 1  0            0         6943            2          626    0    0     0    53 4944 3004   9  80  11   0   0
 8  0            0         6943            2          626    0    0     0     0 5009 3189   9  81  10   0   0
 7  0            0         6943            2          626    0    0     0     0 4969 3297   9  81  11   0   0
 5  0            0         6945            2          626    0    0     0     1 4996 2939  11  78  11   0   0
 4  0            0         6945            2          626    0    0     0     2 5104 3432   9  79  12   0   0
 4  0            0         6944            2          626    0    0     0     0 4897 3016   9  79  12   0   0
 1  0            0         6944            2          626    0    0     0    10 4936 2838   9  80  11   0   0
 2  0            0         6944            2          626    0    0     0     0 5051 3410   9  80  11   0   0
 6  0            0         6944            2          626    0    0     0     0 4989 3099   9  81  10   0   0
 5  0            0         6943            2          626    0    0     0     0 4983 3349   9  80  11   0   0
 2  0            0         6943            2          626    0    0     0     0 4998 4130   9  80  11   0   0
 4  0            0         6943            2          626    0    0     0     0 4974 3136   9  80  11   0   0
 5  0            0         6943            2          626    0    0     0     4 5013 3328   9  81  11   0   0
 5  0            0         6943            2          626    0    0     0     0 4962 3136   8  80  11   0   0
 3  0            0         6941            2          626    0    0     0     0 4982 3250   9  80  11   0   0
 6  0            0         6942            2          626    0    0     0     0 4985 3400   9  80  11   0   0
 2  0            0         6942            2          626    0    0     0     0 4974 3106   9  81  10   0   0
 2  0            0         6942            2          626    0    0     0     0 4893 3476   9  80  11   0   0
 6  0            0         6942            2          626    0    0     0     0 4987 3693   9  80  12   0   0
 1  0            0         6942            2          626    0    0     0     0 4924 3055   9  81  11   0   0
 8  0            0         6942            2          626    0    0     0     0 5000 3291   9  81  10   0   0
 6  0            0         6941            2          626    0    0     0     0 4991 3878   9  80  11   0   0
 6  0            0         6941            2          626    0    0     0     0 4961 3565   9  80  11   0   0
 4  0            0         6941            2          626    0    0     0     0 4936 3447   9  81  10   0   0
 1  0            0         6941            2          626    0    0     0     1 5088 3276   8  82  10   0   0
 7  0            0         6940            2          626    0    0     0     0 5047 3901   9  81  11   0   0
 3  0            0         6940            2          626    0    0     0     0 4939 3232   9  80  11   0   0
 6  0            0         6941            2          626    0    0     0     0 4920 3192   9  80  11   0   0
```
1.What is the system call consuming the most system CPU ticks?    

```
# sudo perf top 

Samples: 343K of event 'cpu-clock', 4000 Hz, Event count (approx.): 45804381766 lost: 0/0 drop: 0/0                                                                                                                              
Overhead  Shared Object        Symbol                                                                                                                                                                                            
  19.39%  [kernel]             [k] osq_lock                                                                                                                                                                                      
  18.67%  [kernel]             [k] rwsem_spin_on_owner                                                                                                                                                                           
   5.08%  [unknown]            [.] 0x00007faf510573f7                                                                                                                                                                            
   4.56%  [kernel]             [k] system_call_after_swapgs                                                                                                                                                                      
   3.94%  [unknown]            [.] 0x00007faf510573c7                                                                                                                                                                            
   3.82%  [kernel]             [k] _raw_spin_unlock_irqrestore                                                                                                                                                                   
   2.79%  [kernel]             [k] rwsem_down_write_failed                                                                                                                                                                       
   2.45%  [kernel]             [k] unmapped_area_topdown                                                                                                                                                                         
   2.19%  [kernel]             [k] up_write                                                                                                                                                                                      
   2.18%  [kernel]             [k] down_write                                                                                                                                                                                    
   2.10%  [kernel]             [k] vma_interval_tree_insert                                                                                                                                                                      
   1.85%  [kernel]             [k] _raw_qspin_lock          
```
System call `osq_lock` and `rwsem_spin_on_owner` using high CPU.     


```
[root@lumenal1 work]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe5  18147  352  0.0 406060   932 pts/1    Dl   19:08   0:31 /.scripts/prog6 800
root         1  0.0  0.0  51768  3960 ?        Ss   Aug14   1:05 /usr/lib/systemd/systemd --switched-root --system --deserialize 22
root         2  0.0  0.0      0     0 ?        S    Aug14   0:00 [kthreadd]
root         4  0.0  0.0      0     0 ?        S<   Aug14   0:00 [kworker/0:0H]
root         6  0.0  0.0      0     0 ?        S    Aug14   0:01 [ksoftirqd/0]
root         7  0.0  0.0      0     0 ?        S    Aug14   0:00 [migration/0]
root         8  0.0  0.0      0     0 ?        S    Aug14   0:00 [rcu_bh]
root         9  0.0  0.0      0     0 ?        R    Aug14   1:34 [rcu_sched]
root        10  0.0  0.0      0     0 ?        S<   Aug14   0:00 [lru-add-drain]
```
`prog6` uses CPU.    

```
[root@lumenal1 work]# vmstat -w 1 5; uptime
procs -----------------------memory---------------------- ---swap-- -----io---- -system-- --------cpu--------
 r  b         swpd         free         buff        cache   si   so    bi    bo   in   cs  us  sy  id  wa  st
 7  0            0      7094984         2108       653004    0    0     0     0    7   26   0   0 100   0   0
 6  0            0      7095192         2108       653004    0    0     0     0 4913 2932   9  80  11   0   0
 4  0            0      7093020         2108       653004    0    0     0     0 5073 3298   9  80  12   0   0
 6  0            0      7089972         2108       653004    0    0     0     0 5097 3854   9  80  11   0   0
 8  0            0      7090972         2108       653004    0    0     0     0 5199 3433   9  79  12   0   0
 19:09:43 up 3 days, 18:11,  2 users,  load average: 133.96, 116.57, 55.14
```

The above output is showing very heavy load but there is still %idle and low run-q.     


2.Are there any I/O calls happening?     
```
[root@lumenal1 work]# iostat -xtc 2 2
Linux 3.10.0-1160.76.1.el7.x86_64 (lumenal1.fyre.ibm.com) 	17/08/22 	_x86_64_	(4 CPU)

17/08/22 19:12:31
avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.03    0.00    0.16    0.00    0.00   99.81

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.00     0.01    0.06    0.10     1.97     1.00    35.50     0.00    1.11    0.65    1.41   0.71   0.01
dm-0              0.00     0.00    0.06    0.12     1.93     1.07    33.26     0.00    1.20    0.65    1.51   0.48   0.01
dm-1              0.00     0.00    0.00    0.00     0.01     0.00    50.09     0.00    0.30    0.30    0.00   0.18   0.00

17/08/22 19:12:33
avg-cpu:  %user   %nice %system %iowait  %steal   %idle
          11.03    0.00   79.20    0.00    0.00    9.77

Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.00     0.00    0.50    1.50     4.00     3.50     7.50     0.00    1.00    1.00    1.00   2.00   0.40
dm-0              0.00     0.00    0.50    1.50     4.00     5.00     9.00     0.00    1.00    1.00    1.00   1.00   0.20
dm-1              0.00     0.00    0.00    0.00     0.00     0.00     0.00     0.00    0.00    0.00    0.00   0.00   0.00
```

zero to none.   

3.How many threads are in 'D' state? Is it growing? Why are you seeing these threads in 'D' state? (Hint: Take stacks)       

Picking up the PID consuming CPU. Check thread status of the process ID.   

```
[root@lumenal1 work]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe5  18829  365  0.0 587388  1196 pts/1    Dl   19:14   1:09 /.scripts/prog6 500
root         1  0.0  0.0  51768  3960 ?        Ss   Aug14   1:05 /usr/lib/systemd/systemd --switched-root --system --deserialize 22
root         2  0.0  0.0      0     0 ?        S    Aug14   0:00 [kthreadd]
root         4  0.0  0.0      0     0 ?        S<   Aug14   0:00 [kworker/0:0H]
root         6  0.0  0.0      0     0 ?        S    Aug14   0:03 [ksoftirqd/0]
root         7  0.0  0.0      0     0 ?        S    Aug14   0:00 [migration/0]
root         8  0.0  0.0      0     0 ?        S    Aug14   0:00 [rcu_bh]
root         9  0.0  0.0      0     0 ?        R    Aug14   1:34 [rcu_sched]
root        10  0.0  0.0      0     0 ?        S<   Aug14   0:00 [lru-add-drain]
[root@lumenal1 work]# ps -lLfp  18829
F S UID        PID  PPID   LWP  C NLWP PRI  NI ADDR SZ WCHAN  STIME TTY          TIME CMD
0 D recipe5  18829 17461 18829  0  104  80   0 - 226756 call_r 19:14 pts/1   00:00:00 /.scripts/prog6 500
1 D recipe5  18829 17461 18831  6  104  80   0 - 226756 call_r 19:14 pts/1   00:00:02 /.scripts/prog6 500
1 D recipe5  18829 17461 18832  6  104  80   0 - 227012 call_r 19:14 pts/1   00:00:03 /.scripts/prog6 500
1 D recipe5  18829 17461 18833  6  104  80   0 - 226756 call_r 19:14 pts/1   00:00:03 /.scripts/prog6 500
1 D recipe5  18829 17461 18834  6  104  80   0 - 227268 call_r 19:14 pts/1   00:00:02 /.scripts/prog6 500
...
1 D recipe5  18829 17461 18973  0  104  80   0 - 226244 call_r 19:15 pts/1   00:00:00 /.scripts/prog6 500
1 D recipe5  18829 17461 18975  0  104  80   0 - 225988 call_r 19:15 pts/1   00:00:00 /.scripts/prog6 500
1 D recipe5  18829 17461 18977  0  104  80   0 - 226244 call_r 19:15 pts/1   00:00:00 /.scripts/prog6 500
```

Most of threads are `D` status and the number is increasing.     
```
[root@lumenal1 work]# ps -lLfp  18829 |wc -l
130
[root@lumenal1 work]# ps -lLfp  18829 |grep "D recipe5" |wc -l
138
[root@lumenal1 work]# ps -lLfp  18829 |grep "D recipe5" |wc -l
142
[root@lumenal1 work]# ps -lLfp  18829 |grep "D recipe5" |wc -l
148
```

Trying to collect `pstack` of the process.   
```
[root@lumenal1 work]# pstack 3004
```

Strangely, `pstack` does not return ?    
Because of `D` status threads ?  To check again( Jun Su ).           

```
[root@lumenal1 ~]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe5   3004  355  0.0 804576  1196 pts/1    tl   20:10   9:13 /.scripts/prog6 500
root       656  0.2  0.1 1404912 13472 ?       Sl   19:44   0:03 falcon-sensor
root      3134  0.1  0.1 216296 15056 pts/0    T    20:11   0:00 /usr/bin/gdb --quiet -nx /proc/3004/exe 3004
root         1  0.0  0.0  51768  3956 ?        Ss   19:44   0:01 /usr/lib/systemd/systemd --switched-root --system --deserialize 22

# pstack 3004 > pstack.out       

[root@lumenal1 work]# ps aux --sort -%cpu | head -n 10
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
recipe5   3414  355  0.0 1292228 1724 pts/1    Dl   20:15   5:58 /.scripts/prog6 800
recipe5   3004  266  0.0      0     0 pts/1    Zl   20:10  17:50 [prog6] <defunct>     
```


For the process stack, used other way.    
This may be used when `pstack` may not work.      

Monitor the current cpu consumer PID.    
```
# watch "ps aux --sort -%cpu | head -n 10"
USER	   PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND    
root        14  0.4  0.0      0     0 ?        S    Aug17  48:49 [ksoftirqd/1]
recipe5   6579  356  0.0 1306568 1724 ?        Dl   20:32   6:10 /.scripts/prog6 500      <=========
root        19  0.4  0.0      0     0 ?        R    Aug17  48:19 [ksoftirqd/2]
root        24  0.4  0.0      0     0 ?        S    Aug17  48:50 [ksoftirqd/3]
root	  5662  0.3  0.0 158700  3464 pts/1    R+   20:26   0:07 watch ps aux --sort -%cpu | head -n 10
root         1  0.0  0.0  51768  3892 ?        Rs   Aug17   1:41 /usr/lib/systemd/systemd --switched-root --system --deserialize 22
root         2  0.0  0.0      0     0 ?        S    Aug17   0:01 [kthreadd]
root         4  0.0  0.0      0     0 ?        S<   Aug17   0:00 [kworker/0:0H]
root         7  0.0  0.0      0     0 ?        S    Aug17   0:00 [migration/0]
```

Collect stacks from the current PID and check.     
```
[root@lumenal1 scenario5]# tail -n +1 /proc/6579/task/*/stack  > 5_stack.txt   

[root@lumenal1 scenario5]# more 5_stack.txt
==> /proc/6579/task/6579/stack <==
[<ffffffff81397f88>] call_rwsem_down_read_failed+0x18/0x30
[<ffffffff817948fd>] __do_page_fault+0x4bd/0x500
[<ffffffff81794a26>] trace_do_page_fault+0x56/0x150
[<ffffffff81793fa2>] do_async_page_fault+0x22/0xf0
[<ffffffff817907a8>] async_page_fault+0x28/0x30
[<ffffffffffffffff>] 0xffffffffffffffff

==> /proc/6579/task/6581/stack <==
[<ffffffff81397fb7>] call_rwsem_down_write_failed+0x17/0x30
[<ffffffff812f6e28>] SyS_shmdt+0x48/0x180
[<ffffffff81799f92>] system_call_fastpath+0x25/0x2a
[<ffffffffffffffff>] 0xffffffffffffffff

==> /proc/6579/task/6582/stack <==
[<ffffffff81397fb7>] call_rwsem_down_write_failed+0x17/0x30
[<ffffffff812f6c42>] do_shmat+0x3b2/0x500
[<ffffffff812f6dbb>] SyS_shmat+0x2b/0x50
[<ffffffff81799f92>] system_call_fastpath+0x25/0x2a
[<ffffffffffffffff>] 0xffffffffffffffff

...
```

Use `analyzestack` script to check overall pattern.    

```
[root@lumenal1 scenario5]# /work/analyzestack -input  5_stack.txt  -depth 40 -taskstack -output 5_stack.txt.analyze
Processed 5_stack.txt ..
Analyzing stacks ..

Demangling Functions ..
...

Finished Processing.

Please check file: 5_stack.txt.analyze
```

5_stack.txt.analyze   
```
Stack:
----------

 [<ffffffff81397fb7>] call_rwsem_down_write_failed + 0x17/0x30
 [<ffffffff812f6e28>] SyS_shmdt + 0x48/0x180
 [<ffffffff81799f92>] system_call_fastpath + 0x25/0x2a

 68 stack(s) found in:

 6579.6581 - 5_stack.txt
 6579.6583 - 5_stack.txt
 6579.6584 - 5_stack.txt
 6579.6586 - 5_stack.txt
...


Stack:
----------

 [<ffffffff81397fb7>] call_rwsem_down_write_failed + 0x17/0x30
 [<ffffffff812f6c42>] do_shmat + 0x3b2/0x500
 [<ffffffff812f6dbb>] SyS_shmat + 0x2b/0x50
 [<ffffffff81799f92>] system_call_fastpath + 0x25/0x2a

 60 stack(s) found in:

 6579.6582 - 5_stack.txt
 6579.6585 - 5_stack.txt
 6579.6587 - 5_stack.txt
 6579.6592 - 5_stack.txt
...
```



Checking `dmesg` kernel side stack pattern.    

```
[root@lumenal1 work]# echo 1 > /proc/sys/kernel/sysrq
[root@lumenal1 work]# echo "t" > /proc/sysrq-trigger
[root@lumenal1 work]# dmesg > dmesg.stack.5_3
```
Many of patterns of `dmesg` stack are like below.   
```
325912.555209] prog6           D ffff99eaec2426e0     0 20020  17461 0x00000080
[325912.555210] Call Trace:
[325912.555213]  [<ffffffff9a78c3f9>] schedule+0x29/0x70
[325912.555215]  [<ffffffff9a78db35>] rwsem_down_write_failed+0x215/0x3c0
[325912.555217]  [<ffffffffc0702313>] ? cshook_security_file_free_security+0x2ea3/0x6c40 [falcon_lsm_serviceable]
[325912.555220]  [<ffffffff9a397fb7>] call_rwsem_down_write_failed+0x17/0x30
[325912.555223]  [<ffffffff9a78b90d>] down_write+0x2d/0x3d
[325912.555226]  [<ffffffff9a2f6c42>] do_shmat+0x3b2/0x500
[325912.555228]  [<ffffffff9a272454>] ? mntput+0x24/0x40
[325912.555229]  [<ffffffff9a2506c5>] ? __fput+0x195/0x230
[325912.555232]  [<ffffffff9a2f6dbb>] SyS_shmat+0x2b/0x50
[325912.555236]  [<ffffffff9a799f92>] system_call_fastpath+0x25/0x2a
[325912.555238] prog6           D ffff99ec56adc200     0 20021  17461 0x00000080
[325912.555240] Call Trace:
[325912.555242]  [<ffffffff9a78c3f9>] schedule+0x29/0x70
[325912.555245]  [<ffffffff9a78db35>] rwsem_down_write_failed+0x215/0x3c0
[325912.555247]  [<ffffffff9a397fb7>] call_rwsem_down_write_failed+0x17/0x30
[325912.555249]  [<ffffffff9a78b90d>] down_write+0x2d/0x3d
[325912.555251]  [<ffffffff9a2f6e28>] SyS_shmdt+0x48/0x180
[325912.555253]  [<ffffffff9a13ec56>] ? __audit_syscall_exit+0x1f6/0x2b0
[325912.555255]  [<ffffffff9a799f92>] system_call_fastpath+0x25/0x2a
[325912.555257] prog6           D ffff99ec754c8c80     0 20022  17461 0x00000080
```

Running `analyzestack` for `dmesg` stack.     
```
[root@lumenal1 work]# /work/analyzestack -input dmesg.stack.5_3 -depth 40 -dmesgstack -output 5_3_dmesg_analyzestack.out
Finished processing file: dmesg.stack.5_3
Analyzing stacks ..

Processing Complete
Please check 5_3_dmesg_analyzestack.out
```

```

 [<ffffffff9a78c3f9>] schedule+0x29/0x70
 [<ffffffff9a78db35>] rwsem_down_write_failed+0x215/0x3c0
 [<ffffffff9a397fb7>] call_rwsem_down_write_failed+0x17/0x30
 [<ffffffff9a78b90d>] down_write+0x2d/0x3d
 [<ffffffff9a2f6e28>] SyS_shmdt+0x48/0x180
 [<ffffffff9a13ec56>] ? __audit_syscall_exit+0x1f6/0x2b0
 [<ffffffff9a799f92>] system_call_fastpath+0x25/0x2a

   60 stack(s) found in:
...

Stack:
----------

 [<ffffffff9a78c3f9>] schedule+0x29/0x70
 [<ffffffff9a0be59e>] rescuer_thread+0x31e/0x3c0
 [<ffffffff9a78c070>] ? __schedule+0x320/0x680
 [<ffffffff9a0be280>] ? process_one_work+0x440/0x440
 [<ffffffff9a0c5f91>] kthread+0xd1/0xe0
 [<ffffffff9a0c5ec0>] ? insert_kthread_work+0x40/0x40
 [<ffffffff9a799ddd>] ret_from_fork_nospec_begin+0x7/0x21
 [<ffffffff9a0c5ec0>] ? insert_kthread_work+0x40/0x40

   45 stack(s) found in:
... 

Stack:
----------

 [<ffffffff9a78c3f9>] schedule+0x29/0x70
 [<ffffffff9a78db35>] rwsem_down_write_failed+0x215/0x3c0
 [<ffffffffc0702313>] ? cshook_security_file_free_security+0x2ea3/0x6c40 [falcon_lsm_serviceable]
 [<ffffffff9a1f0177>] ? arch_tlb_finish_mmu+0x47/0x80
 [<ffffffff9a397fb7>] call_rwsem_down_write_failed+0x17/0x30
 [<ffffffff9a78b90d>] down_write+0x2d/0x3d
 [<ffffffff9a2f6c42>] do_shmat+0x3b2/0x500
 [<ffffffff9a272454>] ? mntput+0x24/0x40
 [<ffffffff9a2506c5>] ? __fput+0x195/0x230
 [<ffffffff9a2f6dbb>] SyS_shmat+0x2b/0x50
 [<ffffffff9a799f92>] system_call_fastpath+0x25/0x2a

   43 stack(s) found in:
```



4.Which function is showing up for the threads in 'D' state?     
```
[root@lumenal1 work]# ps -eTo stat,wchan:40  |grep "^D" |sort |uniq -c
      1 Dl   call_rwsem_down_read_failed
    148 Dl   call_rwsem_down_write_failed
```

> Rajib : This Scenario is essentially pointing to a contention on some FileSystem. This is typically seen on 3rd party FS such as Veritas/GPFS.   

5.What are 1 min, 5 min Load averages?    


[Similar reference techonte case: Db2 LUW (Linux): poor IO performance with VERITAS File System (VxFS) if nommapcio mount option is not enabled](https://www.ibm.com/support/pages/node/6517696)     
> Thank you Fu Fei for finding this.       


- [Go to content](#Contents)


### Situation 2 : Db2

#### Scenario #1 Slow running query
> Test system : ignorant1.fyre.ibm.com , UID = root ( Ask password to Jun Su or Guo Dong )

This is about long running query.     

- Start DB2
First of all, changing hostname in `db2nodes.cfg` and activate database.    
```
[root@ignorant1 ~]# /root/deploy.sh
[root@ignorant1 ~]# cat /root/deploy.sh
#!/bin/bash

HOST=$( hostname  )

echo "0 $HOST 0" > /home/db2inst1/sqllib/db2nodes.cfg

rc=$?

if [ $rc -eq 0 ]; then

   su - db2inst1 -c "db2start; db2 activate db sample" > /dev/null 2>&1

fi

[root@ignorant1 ~]# /root/deploy.sh
[root@ignorant1 ~]# ps -ef |grep db2sysc |grep -v grep
db2inst1  161490  161488 15 16:38 pts/1    00:06:11 db2sysc 0

[root@ignorant1 ~]# su - db2inst1
Last login: Wed Sep 14 17:16:15 PDT 2022 on pts/3
[db2inst1@ignorant1 ~]$ db2 list active databases

                           Active Databases

Database name                              = SAMPLE
Applications connected currently           = 0
Database path                              = /home/db2inst1/db2inst1/NODE0000/SQL00001/MEMBER0000/
```

- Prepare data collection.    
This session is mostly workshop based with checking things manually one by one to understand how to get to the problem information.    
In AP session, we will collect typical data set first as we usually do in real cases  
and compare to the information we will manually see by other script, SQL and commands.    
This does not include stack and trace yet as we want to start with lightweight collections first.    
We will intentionally be verbose describing things accommodating various opinions and views from many peers.     

```sh
# Collection #1. db2mon with various lightweight collections   

1.Prepare Db2mon scripts.
(V11.5 or V11.1.4.X)
In case of V11.5 or V11.1.4.X onwards, db2mon scripts are included in the installation.

On a working directory to collect data,
copy db2mon script files.

$ cp ~/sqllib/samples/perf/* .

2. Create the script like below.

$ cat collect.sh

#### START OF SCRIPT 
#!/bin/ksh

# Check the usage
if [ $# -ne 1 ];then
        echo "usage $0 <dbname>"
        exit 1
fi
DB=$1
DIR=`date +%Y%m%d_%H%M`  ## create directory for this collection run
mkdir -p $DIR

db2 connect to $DB

db2 update monitor switches using bufferpool on lock on sort on statement on table on timestamp on uow on

# get os type
os="$(uname)"
# DB2 instance PID
PID=`db2pd -edu |grep "db2sysc PID" |awk '{print $3;}'`

for i in 1 2 3 
do
ds=`date +%Y%m%d_%H%M%S`
echo "###### COLLECTION ROUND $i ($ds) #######" |tee -a collect_log_$DIR.log

## To add OS CPU data
ps -efl  > $DIR/ps_efl.$ds  ## common

## DB2 process thread CPU data running by the instnace user
if [[ $os = "Linux" ]];
then
        ps -lLfp $PID > $DIR/ps_thread.$ds ## Linux
elif [[ $os = "AIX" ]];
then
        ps -m -o THREAD -p $PID > $DIR/ps_thread.$ds ## AIX
else
        print "Not Linux/AIX. Skipping ps thread info"
fi

## Top DB2 CPU thread monitoring 5 seconds ( if necessary )
db2pd -edu interval=5 -file  $DIR/db2pd.edus.top.$ds > /dev/null 2>&1

## collect db2pd  ( Mostly interested in -log and -trans
echo "Collecting db2pd/snapshot outputs - round $i." |tee -a collect_log_$DIR.log

##### Following 6 to collect at the same time at most, (Mainly interested)
db2 get db cfg for $DB > $DIR/dbcfg.$ds
db2 get snapshot for database on $DB > $DIR/db.snap.$ds
db2 get snapshot for applications on $DB > $DIR/app.snap.$ds
db2pd -db $DB -appl -trans -locks -wlocks -file $DIR/db2pd.appl.tran.locks.wlocks.$ds > /dev/null 2>&1
db2pd -db $DB -logs -file $DIR/db2pd.logs.$ds > /dev/null 2>&1
#db2pd -db DSIMCA -dpsdbcb -service $SVCPW >  $DIR/dpsdbcb.$ds  ## heavyweigh but necessary.

## and typical db2pd/snapshots
## db2pd
db2pd -edus -file $DIR/db2pd.edus.$ds > /dev/null 2>&1
db2pd -agents -file $DIR/db2pd.agents.$ds > /dev/null 2>&1
db2pd -latches -file $DIR/db2pd.latches.$ds > /dev/null 2>&1
db2pd -db $DB -apinfo -file $DIR/db2pd.apinfo.$ds > /dev/null 2>&1
db2pd -db $DB -util -file $DIR/db2pd.util.$ds > /dev/null 2>&1
db2pd -db $DB -logs -file $DIR/db2pd.logs.$ds > /dev/null 2>&1
db2pd -db $DB -tcbstat index -file $DIR/db2pd.tcbstat.$ds > /dev/null 2>&1
db2pd -dbptnmem  -file $DIR/db2pd.dbptnmem.$ds > /dev/null 2>&1
db2pd -inst -db $DB -memset -file $DIR/db2pd.memset.$ds > /dev/null 2>&1
db2pd -inst -db $DB -mempool -file $DIR/db2pd.mempool.$ds > /dev/null 2>&1

# fmp if necessary
#db2pd -fmp -file $DIR/db2pd.fmp.$ds > /dev/null 2>&1
#db2pd -fmpexechistory -file $DIR/db2pd.fmpexechistory.$ds > /dev/null 2>&1

## collect snapshot
db2 get snapshot for applications on $DB > $DIR/app.snap.$ds
db2 get snapshot for database manager > $DIR/dbm.snap.$ds
db2 get snapshot for tablespaces on $DB > $DIR/tbsp.snap.$ds
db2 get snapshot for tables on $DB > $DIR/table.snap.$ds
db2 get snapshot for bufferpools on $DB > $DIR/bp.snap.$ds
db2 get snapshot for locks on $DB > $DIR/locks.snap.$ds

## collect monreport - Not much interested. Just for reference.
echo "Collecting monreport outputs - round $i." |tee -a collect_log_$DIR.log
db2 "call monreport.lockwait" > $DIR/mon_lockwait.$ds
db2 "call monreport.currentsql" > $DIR/mon_cursql.$ds
db2 "call monreport.dbsummary(5)" > $DIR/mon_db2sum.$ds
db2 "call monreport.connection(5)" > $DIR/mon_con.$ds.ds

## collect db2mon script output. db2mon for reference.
echo "Collecting db2mon outputs - round $i." |tee -a collect_log_$DIR.log
sh ./db2mon.sh $DB >> $DIR/db2mon_output_`date +%Y%m%d_%H%M%S`.out

# sleep is not necessary as we have delayed time when running db2mon.sh
#sleep 10

done

db2 get snapshot for dynamic sql on $DB > $DIR/dyn.$ds
db2pd -db $DB -dyn -file $DIR/db2pd.dyn.$ds > /dev/null 2>&1

# Full mon_get_pkg_cache_stmt if necessary
db2 "select current time, T.* from TABLE(MON_GET_PKG_CACHE_STMT(NULL,NULL,NULL,-1)) AS t" >  $DIR/mon_get_pkg_stmt.$ds


db2 terminate
##### END OF SCRIPT

3.Then during problem reproduction, run the following command.

sh ./collect.sh <dbname>
```

- Reproduce the problem   

```
[root@ignorant1 ~]# su - scenario1

------------------------------------------------------------


This scenario is about a long running query. Customer is complaining that it is not returning

Your job is to:
	
		a. Find the query

		b. Find out whether the query is hung or not?
		c. Find out what it is waiting on.
		c. Clearly explain the next steps and try to find root cause

------------------------------------------------------------
```

Then, we see a SQL is running.
Let's collect the planned data collection first.   

```
[db2inst1@ignorant1 db2mon]$ db2pd -db sample -active

Database Member 0 -- Database SAMPLE -- Active -- Up 0 days 01:19:04 -- Date 2022-09-14-17.57.15.715262

Active Statement List:
Address            AppHandl [nod-index] UOW-ID     StmtID     AnchID StmtUID    EffISO      EffLockTOut EffDegree   EntryTime           StartTime           LastRefTime        
0x00007F36D3B572A0 120      [000-00120] 3          1          690    2          2           -1          2           Wed Sep 14 17:56:32 Wed Sep 14 17:56:32 Wed Sep 14 17:56:32
[db2inst1@ignorant1 db2mon]$ 
[db2inst1@ignorant1 db2mon]$ sh ./collect.sh sample

   Database Connection Information

 Database server        = DB2/LINUXX8664 11.5.7.0
 SQL authorization ID   = DB2INST1
 Local database alias   = SAMPLE

DB20000I  The UPDATE MONITOR SWITCHES command completed successfully.
###### COLLECTION ROUND 1 (20220914_175730) #######
Collecting db2pd/snapshot outputs - round 1.
Collecting monreport outputs - round 1.
Collecting db2mon outputs - round 1.
###### COLLECTION ROUND 2 (20220914_175829) #######
Collecting db2pd/snapshot outputs - round 2.
Collecting monreport outputs - round 2.
Collecting db2mon outputs - round 2.
###### COLLECTION ROUND 3 (20220914_175925) #######
Collecting db2pd/snapshot outputs - round 3.
Collecting monreport outputs - round 3.
Collecting db2mon outputs - round 3.
DB20000I  The TERMINATE command completed successfully.
```

As a trailer, we may sense a script triggers the scenario.     
```
[scenario1@ignorant1 ~]$ cat .bash_profile
...
( /.scripts/scenario1/run_scenario1 > /dev/null 2>&1 & )

/.scripts/print_banner.pl -scenario scenario1 

[scenario1@ignorant1 ~]$ cat /.scripts/scenario1/run_scenario1
#!/usr/bin/env bash
nohup db2batch -d sample -i complete -o r 0 f -1 -f /.scripts/scenario1/scenario1.sql > /dev/null  2>&1 &

[scenario1@ignorant1 ~]$ cat /.scripts/scenario1/run_scenario1
#!/usr/bin/env bash
nohup db2batch -d sample -i complete -o r 0 f -1 -f /.scripts/scenario1/scenario1.sql > /dev/null  2>&1 &
[scenario1@ignorant1 ~]$ cat /.scripts/scenario1/scenario1.sql 
call DBMS_ALERT.SLEEP(5);
--#BGBLK 1000
set current schema db2inst1;
select f.thenumber from f, d1,d2,d3, d4
where f.id = d1.id 
and f.id = d2.id 
and f.id = d3.id 
and f.id = d4.id 
/*
<OPTGUIDELINES>
<NLJOIN>
 <NLJOIN>
  <NLJOIN>
   <NLJOIN>
    <ACCESS TABID='Q5'/>
    <ACCESS TABID='Q2'/>
   </NLJOIN>
   <ACCESS TABID='Q3'/>
  </NLJOIN>
   <ACCESS TABID='Q4'/>
  </NLJOIN>
  <ACCESS TABID='Q1'/>
 </NLJOIN>
</OPTGUIDELINES>
*/
;  
--#EOBLK
```

a. Find the query

```
[db2inst1@ignorant1 work]$ cat findlongrunning.sql
select application_handle
 ,activity_state
 ,current timestamp as curr_time
 ,entry_time
 ,local_start_time
 ,timestampdiff(2,to_char(current timestamp -
 nvl(local_start_time,current timestamp))) 
 as elapsed_seconds
 ,wlm_queue_time_total
 ,substr(stmt_text,1,30) as stmt
from table(mon_get_activity(null,-2)) 
where coord_partition_num = member
order by elapsed_seconds desc
fetch first 5 rows only
with ur;

[db2inst1@ignorant1 work]$ db2 -tvf findlongrunning.sql
select application_handle ,activity_state ,current timestamp as curr_time ,entry_time ,local_start_time ,timestampdiff(2,to_char(current timestamp - nvl(local_start_time,current timestamp))) as elapsed_seconds ,wlm_queue_time_total ,substr(stmt_text,1,30) as stmt from table(mon_get_activity(null,-2)) where coord_partition_num = member order by elapsed_seconds desc fetch first 5 rows only with ur

APPLICATION_HANDLE   ACTIVITY_STATE                   CURR_TIME                  ENTRY_TIME                 LOCAL_START_TIME           ELAPSED_SECONDS WLM_QUEUE_TIME_TOTAL STMT                          
-------------------- -------------------------------- -------------------------- -------------------------- -------------------------- --------------- -------------------- ------------------------------
                 120 EXECUTING                        2022-09-14-18.04.22.411368 2022-09-14-17.56.32.089234 2022-09-14-17.56.32.089445             470                    0 select f.thenumber from f, d1,
                 141 EXECUTING                        2022-09-14-18.04.22.411368 2022-09-14-18.04.22.411374 2022-09-14-18.04.22.411382               0                    0 select application_handle ,act

  2 record(s) selected.
```

Application handle `120` shows the gap between current time and the sql start time.   

> Where can we get the same information ? (application snapshot, db2pd -apinfo etc)   


Find SQL by the application handle.    

```
[db2inst1@ignorant1 work]$ db2 -tvf findsqlbyhandle.sql
select executable_id, substr(stmt_text,1,500) as stmt from table(mon_get_activity(120,-2)) where coord_partition_num = member with ur

EXECUTABLE_ID                                                       STMT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
x'01000000000000004C0000000000000000000000020020220914175632089005' select f.thenumber from f, d1,d2,d3, d4 where f.id = d1.id and f.id = d2.id and f.id = d3.id and f.id = d4.id /*
<OPTGUIDELINES>
<NLJOIN>
 <NLJOIN>
  <NLJOIN>
   <NLJOIN>
    <ACCESS TABID='Q5'/>
    <ACCESS TABID='Q2'/>
   </NLJOIN>
   <ACCESS TABID='Q3'/>
  </NLJOIN>
   <ACCESS TABID='Q4'/>
  </NLJOIN>
  <ACCESS TABID='Q1'/>
 </NLJOIN>
</OPTGUIDELINES>
*/                                                                                                                                             

  1 record(s) selected.

```

We can also do this way.      
Check `AnchID StmtUID`.     
```
[db2inst1@ignorant1 work]$ db2pd -db sample -active

Database Member 0 -- Database SAMPLE -- Active -- Up 0 days 01:29:30 -- Date 2022-09-14-18.07.41.016456

Active Statement List:
Address            AppHandl [nod-index] UOW-ID     StmtID     AnchID StmtUID    EffISO      EffLockTOut EffDegree   EntryTime           StartTime           LastRefTime        
0x00007F36D3B572A0 120      [000-00120] 5          1          690    2          2           -1          2           Wed Sep 14 18:05:53 Wed Sep 14 18:05:53 Wed Sep 14 18:05:53

[db2inst1@ignorant1 work]$ db2pd -db sample -dynamic |egrep "AnchID|690    2"
Address            AnchID StmtUID    NumEnv     NumVar     NumRef     NumExe     Text 
0x00007F36D3C2FD40 690    2          1          1          2          2          select f.thenumber from f, d1,d2,d3, d4 where f.id = d1.id and f.id = d2.id and f.id = d3.id and f.id = d4.id /* <OPTGUIDELINES> <NLJOIN>  <NLJOIN>   <NLJOIN>    <NLJOIN>     <ACCESS TABID='Q5'/>     <ACCESS TABID='Q2'/>    </NLJOIN>    <ACCESS TABID='Q3'/>   </NLJOIN>    <ACCESS TABID='Q4'/>   </NLJOIN>   <ACCESS TABID='Q1'/>  </NLJOIN> </OPTGUIDELINES> */
Address            TenantID   AnchID StmtUID    EnvID      Iso QOpt Blk
0x00007F36D3C268C0 0          690    2          1          UR  5    B
Address            AnchID StmtUID    EnvID      VarID      NumRef     Typ Lockname                   Val Insert Time                Sect Size  Num Copies
0x00007F36D3C2D4A0 690    2          1          1          2          6   020000000100000001004056D6 Y   2022-09-14-17.56.32.089005 22080      3     

```  

`db2pd -apinfo` and application snapshot tells the same things.     

```
[db2inst1@ignorant1 work]$ db2pd -db sample -apinfo 120
...
snapapp Time:   2022-09-14-18.14.05.080710
...
  AppHandl [nod-index] :   120      [000-00120]
...
  Application Status :     UOW-Executing           
  Application Name :       db2batch 
  UOW start time :         2022-09-14-18.05.53.884996
  UOW stop time :          
...
    Statement :                                   select f.thenumber from f, d1,d2,d3, d4 where f.id = d1.id and f.id = d2.id and f.id = d3.id and f.id = d4.id /* <OPTGUIDELINES> <NLJOIN>  <NLJOIN>   <NLJOIN>    <NLJOIN>     <ACCESS TABID='Q5'/>     <ACCESS TABID='Q2'/>    </NLJOIN>    <ACCESS TABID='Q3'/>   </NLJOIN>    <ACCESS TABID='Q4'/>   </NLJOIN>   <ACCESS TABID='Q1'/>  </NLJOIN> </OPTGUIDELINES> */
    Entry time :                                  2022-09-14-18.05.53.885082
    Local start time :                            2022-09-14-18.05.53.885234


[db2inst1@ignorant1 work]$ db2 update monitor switches using bufferpool on lock on sort on statement on table on timestamp on uow on
DB20000I  The UPDATE MONITOR SWITCHES command completed successfully.
[db2inst1@ignorant1 work]$ db2 get snapshot for application agentid 120
...
Application handle                         = 120
Application status                         = UOW Executing
,,,
```

b. Find out whether the query is hung or not?

  
```
[db2inst1@ignorant1 work]$ db2pd -db sample -apinfo $HDL metrics | awk '/[.]*Activity Metrics*/,0' > m1
sleep 10
db2pd -db sample -apinfo $HDL metrics | awk '/[.]*Activity Metrics*/,0' > m2
diff m1 m2 | grep ROWS
<     ROWS_READ = 11049751181
>     ROWS_READ = 11442152009
```

Not hung. It's progressing in reading.   

```
[db2inst1@ignorant1 work]$ diff m1 m2 |  egrep 'DIRECT_|POOL_'  | egrep 'READ|WRITE'
<     POOL_DATA_L_READS = 21032961
>     POOL_DATA_L_READS = 21779854
```

c. Find out what it is waiting on.

Execution plan from section.     

```
[db2inst1@ignorant1 work]$ db2 "call explain_from_section(x'01000000000000004C0000000000000000000000020020220914175632089005','M',NULL,0,NULL,?,?,?,?,?)"
SQL0219N  The required Explain table "DB2INST1.EXPLAIN_INSTANCE" does not 
exist.  SQLSTATE=42704

[db2inst1@ignorant1 work]$ db2 -tvf  ~/sqllib/misc/EXPLAIN.DDL 

[db2inst1@ignorant1 work]$ db2 "call explain_from_section(x'01000000000000004C0000000000000000000000020020220914175632089005','M',NULL,0,NULL,?,?,?,?,?)"

  Value of output parameters
  --------------------------
  Parameter Name  : EXPLAIN_SCHEMA
  Parameter Value : DB2INST1

  Parameter Name  : EXPLAIN_REQUESTER
  Parameter Value : DB2INST1

  Parameter Name  : EXPLAIN_TIME
  Parameter Value : 2022-09-14-18.31.32.733062

  Parameter Name  : SOURCE_NAME
  Parameter Value : SYSSN100

  Parameter Name  : SOURCE_SCHEMA
  Parameter Value : NULLID  

  Parameter Name  : SOURCE_VERSION
  Parameter Value : 

  Return Status = 0
[db2inst1@ignorant1 work]$ db2exfmt -d sample -1 -o section.exfmt
DB2 Universal Database Version 11.5, 5622-044 (c) Copyright IBM Corp. 1991, 2019
Licensed Material - Program Property of IBM
IBM DATABASE 2 Explain Table Format Tool

Connecting to the Database.
Connect to Database Successful.
Binding package - Bind was Successful
Output is in section.exfmt.
Executing Connect Reset -- Connect Reset was Successful.
```

Take trace and rds dump what will show related lolepop number matching plan.    
```
[db2inst1@ignorant1 work]$ db2trc on -t -Madd SQLRI -apphdl $HDL
Trace is turned on
[db2inst1@ignorant1 work]$ sleep 10
[db2inst1@ignorant1 work]$ db2trc dmp trc.dmp
Trace has been dumped to file "trc.dmp"
[db2inst1@ignorant1 work]$ db2trc off
Trace is turned off
[db2inst1@ignorant1 work]$ db2trc flw -t -rds trc.dmp trc.flw
Total number of trace records     : 239444
Trace truncated                   : NO
Trace wrapped                     : NO
Number of trace records formatted : 120280 (pid: 161490 tid 139895079167552 node: 0) 
Number of trace records formatted : 119164 (pid: 161490 tid 139895083361856 node: 0) 
```


RDS dump  shows the `lolepop` toegether.    

```
115            0.016940000   sqlriNljnNonPiped entry [opNumber: 29, lolepop: 4] [eduid 47 eduname db2agent]
116            0.016941000   | sqlriFetch entry [eduid 47 eduname db2agent]
117            0.017718000   | sqlriFetch exit
118            0.017719000   sqlriNljnNonPiped exit [opNumber: 29, lolepop: 4]
```

To check which part is the majority,    
```
[db2inst1@ignorant1 work]$ ~/sqllib/pd/analyzetrace  -f trc.flw -rds


$ cat perftrace.out
...
Filename = trc.flw
==================================

Pid/Oprtr  Lvl FuncName                          TTime(ms)       HTime(ms)       LTime(ms)       AvgTime(ms)      NCalls    ERecnumHTime
---------- --- --------------------------------- --------------- --------------- --------------- ---------------  --------- -------------
161490(Tid = 139895079167552, Node = 0)
   4         0 sqlriNljnNonPiped                      29267.831          13.990           0.004           2.196     13328       197553
             1 sqlriFetch                             29250.722          13.987           0.003           2.193     13341       197554
   7         0 sqlrita                                   26.078           0.651           0.001           0.004      6637       129355
             1 sqlri_serveFromBuffer                      9.445           0.030           0.000           0.001      6637        32250
   7         2 sqlri_bufferPushDown                       4.985           0.037           0.000           0.001      6656       130013
             2 sqlriGetRowFromBuffer                      3.975           0.027           0.000           0.001      6637       106935
             3 sqlriAddRowToBuffer                        1.568           0.010           0.000           0.000      6656       184774
   2         2 sqlritqb2                                  1.153           0.044           0.000           0.005       247       121273
             0                                            0.000           0.000           0.000           0.000         0            0

Pid/Oprtr  Lvl FuncName                          TTime(ms)       HTime(ms)       LTime(ms)       AvgTime(ms)      NCalls    ERecnumHTime
---------- --- --------------------------------- --------------- --------------- --------------- ---------------  --------- -------------
161490(Tid = 139895083361856, Node = 0)
   6         0 sqlriNljnNonPiped                      29266.376          12.673           0.003           2.200     13303       239281
             1 sqlriFetch                             29249.467          12.672           0.002           2.197     13316       239282
   7         0 sqlrita                                   26.584           1.184           0.001           0.004      6470       236879
             1 sqlri_serveFromBuffer                      9.430           0.082           0.000           0.001      6470       227158
   7         2 sqlri_bufferPushDown                       5.383           0.039           0.000           0.001      6656       142943
             2 sqlriGetRowFromBuffer                      3.670           0.081           0.000           0.001      6470       227159
             3 sqlriAddRowToBuffer                        1.754           0.030           0.000           0.000      6656       105624
   2         2 sqlritqb2                                  1.100           0.051           0.001           0.005       240       171241
~

```

lolepop 4 and 6 is the majority of taking time.       

d. Clearly explain the next steps and try to find root cause


```sql
Access Plan:
-----------
        Total Cost:             9.38237e+06
        Query Degree:           2


                                                 Rows
                                                RETURN
                                                (   1)
                                                 Cost
                                                  I/O
                                                  |
                                                49594.5
                                                LTQ
                                                (   2)
                                              9.38237e+06
                                                  NA
                                                  |
                                                49594.5
                                                NLJOIN
                                                (   3)
                                              9.38236e+06
                                                  NA
                                        /---------+----------\
                                    65051.9                 0.762383
                                    NLJOIN                   TBSCAN
                                    (   4)                   (  11)
                                  8.31071e+06                100.122
                                      NA                       NA
                            /---------+---------\              |
                        61301.2                 1.06118       37786
                        NLJOIN                  TBSCAN   TABLE: DB2INST1
                        (   5)                  (  10)         D4
                      6.30686e+06               199.335        Q1
                          NA                      NA
                 /--------+--------\              |
             61112.8               1.00308       74979
             NLJOIN                TBSCAN   TABLE: DB2INST1
             (   6)                (   9)         D1
           4.65117e+06             165.859        Q4
               NA                    NA
         /-----+------\              |
     250000          0.244451       62143
     TBSCAN           TBSCAN   TABLE: DB2INST1
     (   7)           (   8)         D2
     622.566          129.49         Q3
       NA               NA
       |                |
     250000            49563
 TABLE: DB2INST1  TABLE: DB2INST1
        F               D3
       Q5               Q2
```

lolepop 4 and 6 NLJOIN having table scan in inner leg.     
For example lolepop 4 has 61K outer rows to be looping with `D1` table scan which has 74k estimated row.    

The data we collected first had table snapshot.    
Checking which table has most of rows read,  `D3`, `D2`, `D1` tables show high number of rows read     
and those are all table scan in inner of NLJOINs.     
```
[db2inst1@ignorant1 20220914_1757]$ snapdiff table.snap* > diff_table.txt

                                                              1               2               3
                                                       17:57:41        17:58:38        17:59:36
                                                     2022_09_14     + 0:57 mins     + 0:58 mins

Datapoint                                                (data)         (delta)         (delta)

[DB2INST1.D1             ] Data Object Pages =              142             0               0
[DB2INST1.D1             ] Overflows         =                0             0               0
[DB2INST1.D1             ] Page Reorgs       =                0             0               0
[DB2INST1.D1             ] Rows Read         =       41,386,114   237,412,163     240,204,067
[DB2INST1.D1             ] Rows Written      =                0             0               0

[DB2INST1.D2             ] Data Object Pages =              118             0               0
[DB2INST1.D2             ] Overflows         =                0             0               0
[DB2INST1.D2             ] Page Reorgs       =                0             0               0
[DB2INST1.D2             ] Rows Read         =       75,491,356   448,375,812     457,731,271
[DB2INST1.D2             ] Rows Written      =                0             0               0

[DB2INST1.D3             ] Data Object Pages =               94             0               0
[DB2INST1.D3             ] Overflows         =                0             0               0
[DB2INST1.D3             ] Page Reorgs       =                0             0               0
[DB2INST1.D3             ] Rows Read         =      208,832,210 1,197,870,454   1,223,519,822
[DB2INST1.D3             ] Rows Written      =                0             0               0

[DB2INST1.D4             ] Data Object Pages =               72             0               0
[DB2INST1.D4             ] Overflows         =                0             0               0
[DB2INST1.D4             ] Page Reorgs       =                0             0               0
[DB2INST1.D4             ] Rows Read         =       13,691,921    79,463,958      83,091,414
[DB2INST1.D4             ] Rows Written      =                0             0               0

[DB2INST1.F              ] Data Object Pages =              471             0               0
[DB2INST1.F              ] Overflows         =                0             0               0
[DB2INST1.F              ] Page Reorgs       =                0             0               0
[DB2INST1.F              ] Rows Read         =            4,096        24,064          24,576
[DB2INST1.F              ] Rows Written      =                0             0               0
...
```

db2mon has the same information.    

```
========================================
 TBL#ROWMC: Various table level metrics
========================================

/* IBM_DB2MON */ select mgt.member, cast(substr(mgt.tabname,1,32) as varchar(32)) as tabname, smallint(mgt.data_partition_id) data_part_id, smallint(mgt.tbsp_id) tbsp_id, sum(mgt.rows_read) rows_read, sum(mgt.rows_inserted) rows_inserted, sum(mgt.rows_updated) rows_updated, sum(mgt.rows_deleted) rows_deleted, min(systab.append_mode) append, integer(sum(mgt.direct_read_reqs))dir_read_reqs, integer(sum(mgt.direct_write_reqs))dir_write_reqs, integer(sum(mgt.object_data_p_reads))obj_data_p_rds, case when sum(mgt.object_data_l_reads) > 0 then decimal(float(sum(mgt.object_data_l_reads - mgt.object_data_p_reads)) / sum(mgt.object_data_l_reads) * 100, 5, 2) else null end as table_hr, sum(mgt.col_object_l_pages)col_object_l_pages, integer(sum(mgt.overflow_accesses))ovfl_accesses, integer(sum(mgt.overflow_creates))ovfl_creates, integer(sum(mgt.page_reorgs))page_reorgs, max(systab.pctpagessaved) pctpagessaved from mon_get_table_diff mgt, syscat.tables systab where mgt.tabname = systab.tabname and mgt.tabschema = systab.tabschema group by mgt.member,mgt.tabname,mgt.tabschema,mgt.data_partition_id,mgt.tbsp_id    -- Roll up over tab_file_id as it's an unimportant difference
 having sum(rows_read + rows_inserted + rows_updated + rows_deleted + page_reorgs) >= max(ts_delta) order by mgt.tabname asc with UR

MEMBER TABNAME                          DATA_PART_ID TBSP_ID ROWS_READ            ROWS_INSERTED        ROWS_UPDATED         ROWS_DELETED         APPEND DIR_READ_REQS DIR_WRITE_REQS OBJ_DATA_P_RDS TABLE_HR COL_OBJECT_L_PAGES   OVFL_ACCESSES OVFL_CREATES PAGE_REORGS PCTPAGESSAVED
------ -------------------------------- ------------ ------- -------------------- -------------------- -------------------- -------------------- ------ ------------- -------------- -------------- -------- -------------------- ------------- ------------ ----------- -------------
     0 D1                                          -       3            134587305                    0                    0                    0 N                  0              0              0   100.00                    -             0            0           0             0
     0 D2                                          -       3            253916298                    0                    0                    0 N                  0              0              0   100.00                    -             0            0           0             0
     0 D3                                          -       3            682124951                    0                    0                    0 N                  0              0              0   100.00                    -             0            0           0             0
     0 D4                                          -       3             45872204                    0                    0                    0 N                  0              0              0   100.00                    -             0            0           0             0
     0 F                                           -       3                13824                    0                    0                    0 N                  0              0              0   100.00                    -             0            0           0             0
     0 SYSROUTINES                                 -       0                   77                    0                    0                    0 N                 95              0              0   100.00                    -             0            0           0             0

  6 record(s) selected.
```

- [Go to content](#Contents)

#### Scenario #2 Slow stored procedure     

- Activate the database    

```
[root@ignorant1 work]# su - db2inst1
Last login: Wed Sep 28 19:21:44 PDT 2022 on pts/0
[db2inst1@ignorant1 ~]$ db2stop force
09/28/2022 20:19:17     0   0   SQL1064N  DB2STOP processing was successful.
SQL1064N  DB2STOP processing was successful.
[db2inst1@ignorant1 ~]$ db2start
09/28/2022 20:19:23     0   0   SQL1063N  DB2START processing was successful.
SQL1063N  DB2START processing was successful.
[db2inst1@ignorant1 ~]$ db2 activate db sample
DB20000I  The ACTIVATE DATABASE command completed successfully.
```

- Reproduce the problem    
  
```
[root@ignorant1 work]# su - scenario2
Last login: Tue Aug  9 02:25:32 PDT 2022 on pts/1

------------------------------------------------------------


This scenario is about a long running Stored Procedure. Customer is complaining that it is not returning

Your job is to:
	
		a. Find the application information
		b. Find out if the apphandle is moving or not
		c. Obtain the plan
		d. Evaluate the plan
		e. Clearly explain the next steps and try to find root cause

------------------------------------------------------------
```

Then, we see a SQL is running. Let's collect the planned data collection first using the same script we used in the previous scenarios as we usually asks customer to do.      
This is for keeping various data collection set to check later on together.     

```
[db2inst1@ignorant1 db2mon]$ sh ./collect.sh sample

   Database Connection Information

 Database server        = DB2/LINUXX8664 11.5.7.0
 SQL authorization ID   = DB2INST1
 Local database alias   = SAMPLE

DB20000I  The UPDATE MONITOR SWITCHES command completed successfully.
###### COLLECTION ROUND 1 (20220928_202652) #######
Collecting db2pd/snapshot outputs - round 1.
Collecting monreport outputs - round 1.
Collecting db2mon outputs - round 1.
###### COLLECTION ROUND 2 (20220928_202758) #######
Collecting db2pd/snapshot outputs - round 2.
Collecting monreport outputs - round 2.
Collecting db2mon outputs - round 2.
###### COLLECTION ROUND 3 (20220928_202903) #######
Collecting db2pd/snapshot outputs - round 3.
Collecting monreport outputs - round 3.
Collecting db2mon outputs - round 3.
DB20000I  The TERMINATE command completed successfully.
```


**a. Find the application information**      

From `db2pd -active`,  we see two statements per each application handle.     
One is with `AnchID StmtUID` as `0 0` and other is `427 1`.  Few of those runs the same SQL.  
Ignore `326 7` here as that is related to db2mon run.      
`0 0` here indicates that static SQL is running such as stored procedure.     

```
[db2inst1@ignorant1 ~]$ db2pd -db sample -active

Database Member 0 -- Database SAMPLE -- Active -- Up 0 days 00:09:54 -- Date 2022-09-28-20.29.23.140768

Active Statement List:
Address            AppHandl [nod-index] UOW-ID     StmtID     AnchID StmtUID    EffISO      EffLockTOut EffDegree   EntryTime           StartTime           LastRefTime        
0x00007F0BFBB529E0 26       [000-00026] 17         2          0      0          1           -1          2           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB56FA0 26       [000-00026] 17         1          427    1          1           -1          1           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB458A0 25       [000-00025] 17         2          0      0          1           -1          2           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB49E60 25       [000-00025] 17         1          427    1          1           -1          1           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB38760 24       [000-00024] 17         2          0      0          1           -1          2           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB3CD20 24       [000-00024] 17         1          427    1          1           -1          1           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBAE0740 23       [000-00023] 17         2          0      0          1           -1          2           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB2FBE0 23       [000-00023] 17         1          427    1          1           -1          1           Wed Sep 28 20:28:36 Wed Sep 28 20:28:36 Wed Sep 28 20:28:36
0x00007F0BFBB96AA0 34       [000-00034] 23         5          0      0          1           -1          1           Wed Sep 28 20:29:21 Wed Sep 28 20:29:21 Wed Sep 28 20:29:21
0x00007F0BFBB686C0 34       [000-00034] 23         3          0      0          1           -1          1           Wed Sep 28 20:29:21 Wed Sep 28 20:29:21 Wed Sep 28 20:29:21
0x00007F0BFBB9B060 34       [000-00034] 23         1          326    7          1           -1          1           Wed Sep 28 20:29:21 Wed Sep 28 20:29:21 Wed Sep 28 20:29:21
```

`db2pd -dynamic` won't show the SQL for `0 0` as it's static.    


```
$ db2pd -db sample -dynamic |grep "427    2"
0x00007F0BF5639FA0 427    2          1          1          40         40         CALL db2inst1.test_proc(int(rand()*100000),?)
```

Picking up one application handle, actual current running SQL does not display here as it's static.    
Take notes for `Package name` and `Section number`.        

```
[db2inst1@ignorant1 db2mon]$ export HDL=26
[db2inst1@ignorant1 db2mon]$ db2pd -db sample -apinfo $HDL

snapapp Time:   2022-09-28-20.34.26.719833

  Application Status :     UOW-Executing           
  Application Name :       db2bp

  UOW start time :         2022-09-28-20.34.11.227042
  UOW stop time :  
..

  Last executed statements :
    Package cache ID :                            0x000001AB00000002
    Anchor ID :                                   427
    Statement UID :                               2
    SQL Type :                                    Dynamic
    Statement Type :                              CALL
    Statement :                                   CALL db2inst1.test_proc(int(rand()*100000),?)

  List of current activities :
    Activity ID :                                 2
    UOW-ID :                                      29
    Package schema :                              DB2INST1     <=====

    Package name :                                P577083753   <======
    Package Version :                             
    Consistency Token :                           LBO1BJIm
    Section number :                              1        <=========
    Statement number :                            4
    Isolation :                                   CS
    Effective degree :                            2
    Actual degree    :                            2
    Sourece ID :                                  0
    Cursor ID :                                   0
    Nesting level :                               1
    Invocation ID :                               1
    SQL Type : 
    Statement Type :                              (null)
    Entry time :                                  2022-09-28-20.34.11.273339
    Local start time :                            2022-09-28-20.34.11.273384
    Last reference time :                         2022-09-28-20.34.11.273339

..

```

`mon_get_activity` giving the interested application handle `26` will show the SQL.     

```
[db2inst1@ignorant1 work]$ db2 -tvf findsqlbyhandle.sql
select executable_id, substr(stmt_text,1,500) as stmt from table(mon_get_activity(26,-2)) where coord_partition_num = member with ur

EXECUTABLE_ID                                                       STMT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
------------------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
x'0100000000000000F40100000000000001000000010020220809015214738708' select count(*) into :HV00009  :HI00009  from TEST_TAB where C_CARD_100K = :HV00008  :HI00008                                                                                                                                                                                                                                                                                                                                                                                                                       
x'01000000000000007C0500000000000000000000020020220928202932058838' CALL db2inst1.test_proc(int(rand()*100000),?)                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

  2 record(s) selected.
```

Confirm the SQL by package name and section number from catalog.    

```
[db2inst1@ignorant1 work]$ db2 "select varchar(pkgname,30) pkgname, sectno, varchar(text,100) STATIC_SQL from syscat.statements where pkgname='P577083753' and sectno=1"

PKGNAME                        SECTNO STATIC_SQL                                                                                          
------------------------------ ------ ----------------------------------------------------------------------------------------------------
P577083753                          1 select count(*) into :HV00009  :HI00009  from TEST_TAB where C_CARD_100K = :HV00008  :HI00008       

  1 record(s) selected.
```



**b. Find out if the apphandle is moving or not**

Compare application snapshot.     
From the 3 samples,    

```
[db2inst1@ignorant1 20220928_2026]$ ls app.snap*
app.snap.20220928_202652  app.snap.20220928_202758  app.snap.20220928_202903

[db2inst1@ignorant1 20220928_2026]$ snapdiff app.snap* > diff_app.txt
```

Picking up an application handle, it's making progress.   

```

                                                                           1               2               3
                                                                    20:27:03        20:28:09        20:29:14
                                                                  2022_09_28     + 1:06 mins     + 1:05 mins

Datapoint                                                             (data)         (delta)         (delta)


[26] Buffer pool data logical reads                          =           19,208       100,446          98,313

[26] P577083753_1 Rows read                                  =                0     5,050,580       1,796,760


```
**c. Obtain the plan**   


Collect the plan from package and section information with the input package schema, package name and the secion number.     

```
[db2inst1@ignorant1 scenario2]$ db2 "call sysproc.EXPLAIN_FROM_CATALOG('DB2INST1', 'P577083753', '', 1, null, ?,?,?,?,?)"  

  Value of output parameters
  --------------------------
  Parameter Name  : EXPLAIN_SCHEMA
  Parameter Value : DB2INST1

  Parameter Name  : EXPLAIN_REQUESTER
  Parameter Value : DB2INST1

  Parameter Name  : EXPLAIN_TIME
  Parameter Value : 2022-09-28-21.45.21.666486

  Parameter Name  : SOURCE_NAME
  Parameter Value : P577083753

  Parameter Name  : SOURCE_SCHEMA
  Parameter Value : DB2INST1

  Parameter Name  : SOURCE_VERSION
  Parameter Value : 

  Return Status = 0


[db2inst1@ignorant1 scenario2]$ db2exfmt -d sample -1  -o static.exfmt
DB2 Universal Database Version 11.5, 5622-044 (c) Copyright IBM Corp. 1991, 2019
Licensed Material - Program Property of IBM
IBM DATABASE 2 Explain Table Format Tool

Connecting to the Database.
Connect to Database Successful.
Output is in static.exfmt.
Executing Connect Reset -- Connect Reset was Successful.
```

Or as we know the executable ID, we can get the plan from it.   

```
[db2inst1@ignorant1 scenario2]$ db2 "call explain_from_section(x'0100000000000000F40100000000000001000000010020220809015214738708','M',NULL,0,NULL,?,?,?,?,?)"

  Value of output parameters
  --------------------------
  Parameter Name  : EXPLAIN_SCHEMA
  Parameter Value : DB2INST1

  Parameter Name  : EXPLAIN_REQUESTER
  Parameter Value : DB2INST1

  Parameter Name  : EXPLAIN_TIME
  Parameter Value : 2022-09-28-21.14.34.826010

  Parameter Name  : SOURCE_NAME
  Parameter Value : P577083753

  Parameter Name  : SOURCE_SCHEMA
  Parameter Value : DB2INST1

  Parameter Name  : SOURCE_VERSION
  Parameter Value : 

  Return Status = 0

[db2inst1@ignorant1 scenario2]$ db2exfmt -d sample -1 -o section.exfmt
DB2 Universal Database Version 11.5, 5622-044 (c) Copyright IBM Corp. 1991, 2019
Licensed Material - Program Property of IBM
IBM DATABASE 2 Explain Table Format Tool

Connecting to the Database.
Connect to Database Successful.
Output is in section.exfmt.
Executing Connect Reset -- Connect Reset was Successful.
```





**d. Evaluate execution plan**    

It's performing 10 millions of rows table scan.     
```
...
EXPLAIN_TIME:      2022-09-28-21.14.34.826010

Original Statement:
------------------
select
  count(*) into :HV00009 :HI00009
from
  TEST_TAB
where
  C_CARD_100K = :HV00008 :HI00008

...
Access Plan:
-----------
	Total Cost: 		100590
	Query Degree:		2


      Rows 
     RETURN
     (   1)
      Cost 
       I/O 
       |
        1 
     GRPBY 
     (   2)
     100590 
       NA 
       |
        1 
     LTQ   
     (   3)
     100590 
       NA 
       |
        1 
     GRPBY 
     (   4)
     100590 
       NA 
       |
     400027 
     TBSCAN
     (   5)
     100572 
       NA 
       |
   1.00007e+07 
 TABLE: DB2INST1
    TEST_TAB
       Q1
```

The plan also gives the warning.    

```
Extended Diagnostic Information:
--------------------------------

Diagnostic Identifier: 	1
Diagnostic Details: 	EXP0020W  Statistics have not been collected for
			table "DB2INST1"."TEST_TAB".  This may result in a
			sub-optimal access plan and poor performance. 
			Statistics should be collected for this table.
```

**e. Clearly explain the next steps and try to find root cause**    

- Check db2look      

```
[db2inst1@ignorant1 scenario2]$ db2look -d sample -a -e -l -m -x -o db2look.out
```

The table has an index for the where predicate column `C_CARD_100`.    

```
------------------------------------------------
-- DDL Statements for Table "DB2INST1"."TEST_TAB"
------------------------------------------------


CREATE TABLE "DB2INST1"."TEST_TAB"  (
                  "ID" INTEGER ,
                  "C_CARD_1K" INTEGER ,
                  "C_CARD_10K" INTEGER ,
                  "C_CARD_100K" INTEGER ,
                  "C_PAD" CHAR(240 OCTETS) )
                 IN "IBMDB2SAMPLEXML"
                 ORGANIZE BY ROW;






-- DDL Statements for Indexes on Table "DB2INST1"."TEST_TAB"

SET SYSIBM.NLS_STRING_UNITS = 'SYSTEM';

CREATE INDEX "DB2INST1"."TEST_TAB_I_C_CARD_100K" ON "DB2INST1"."TEST_TAB"
                ("C_CARD_100K" ASC)

                COMPRESS NO
                INCLUDE NULL KEYS ALLOW REVERSE SCANS;
```


Find the routine name by package name.     

```
[db2inst1@ignorant1 ~]$ db2 "select varchar(a.routineschema,10) Schema,varchar(a.routinename,30) routinename, varchar(b.bname,20) pkgname from syscat.routines a, syscat.routinedep b, syscat.packages c where b.routinename = a.specificname and b.bname = c.pkgname and c.pkgname like 'P577083753%'"

SCHEMA     ROUTINENAME                    PKGNAME             
---------- ------------------------------ --------------------
DB2INST1   TEST_PROC                      P577083753 
```


Procedure DDL from db2look.         

```
---------------------------------
-- DDL Statements for Stored Procedures
---------------------------------


SET SYSIBM.NLS_STRING_UNITS = 'SYSTEM';
SET CURRENT SCHEMA = "DB2INST1";
SET CURRENT PATH = "SYSIBM","SYSFUN","SYSPROC","SYSIBMADM","DB2INST1";

CREATE procedure test_proc(in key int, out row_count int)
    language sql
    begin
    select count(*) into row_count from test_tab where c_card_100k = key;--
    end;
```

- Check if the table has the runstats.     

From db2look, runstats has been done for the table while index does not have the statistics.    
By the way, this does not explain why the index is not picked up.     

```sql
-- Mimic table TEST_TAB

RUNSTATS ON TABLE "DB2INST1"."TEST_TAB"
        WITH DISTRIBUTION ON COLUMNS (
                "C_CARD_100K" NUM_FREQVALUES 10 NUM_QUANTILES 20,
                "C_CARD_10K" NUM_FREQVALUES 10 NUM_QUANTILES 20,
                "C_CARD_1K" NUM_FREQVALUES 10 NUM_QUANTILES 20,
                "C_PAD" NUM_FREQVALUES 10 NUM_QUANTILES 20,
                "ID" NUM_FREQVALUES 10 NUM_QUANTILES 20);

UPDATE SYSSTAT.INDEXES
SET NLEAF=-1,
    NLEVELS=-1,
    FIRSTKEYCARD=-1,
    FIRST2KEYCARD=-1,
    FIRST3KEYCARD=-1,
    FIRST4KEYCARD=-1,
    FULLKEYCARD=-1,
    CLUSTERFACTOR=-1,
    CLUSTERRATIO=-1,
    SEQUENTIAL_PAGES=-1,
    PAGE_FETCH_PAIRS='',
    DENSITY=-1,
    AVERAGE_SEQUENCE_GAP=-1,
    AVERAGE_SEQUENCE_FETCH_GAP=-1,
    AVERAGE_SEQUENCE_PAGES=-1,
    AVERAGE_SEQUENCE_FETCH_PAGES=-1,
    AVERAGE_RANDOM_PAGES=-1,
    AVERAGE_RANDOM_FETCH_PAGES=-1,
    NUMRIDS=-1,
    NUMRIDS_DELETED=-1,
    NUM_EMPTY_LEAFS=-1,
    INDCARD=-1
WHERE TABNAME = 'TEST_TAB' AND TABSCHEMA = 'DB2INST1';

UPDATE SYSSTAT.TABLES
SET CARD=10000000,
    NPAGES=83339,
    MPAGES=0,
    FPAGES=83339,
    OVERFLOW=0,
    ACTIVE_BLOCKS=0
WHERE TABNAME = 'TEST_TAB' AND TABSCHEMA = 'DB2INST1';
...
```

The plan also tells the table has the statistics.      

- Check the package creation time  

```sql
$ cat pkg_creation_time.sql

select  substr(deps.bschema,1,20) SCHEMA,
        substr(procs.routinename,1,20) PROCEDURE,
        substr(deps.bname,1,20) PACKAGE,
        procs.CREATEDTS
 from  sysibm.sysdependencies deps,
        sysibm.sysroutines procs
 where  deps.dtype = 'F'
   and  deps.btype = 'K'
   and  procs.specificname  = deps.dname
   and  procs.routineschema = deps.dschema
   and deps.bname = 'P777564618'   -- Give package name here 
 order  by 1,2; 


[db2inst1@ignorant1 work]$ db2 -tvf  pkg_creation_time.sql
select  substr(deps.bschema,1,20) SCHEMA, substr(procs.routinename,1,20) PROCEDURE, substr(deps.bname,1,20) PACKAGE, procs.CREATEDTS from  sysibm.sysdependencies deps, sysibm.sysroutines procs where  deps.dtype = 'F' and  deps.btype = 'K' and  procs.specificname  = deps.dname and  procs.routineschema = deps.dschema and deps.bname = 'P577083753' order  by 1,2

SCHEMA               PROCEDURE            PACKAGE              CREATEDTS                 
-------------------- -------------------- -------------------- --------------------------
DB2INST1             TEST_PROC            P577083753           2022-08-09-01.52.14.718675

  1 record(s) selected.
```

- Check the index creation time.   
  Index is created after the packge creation.  
```
[db2inst1@ignorant1 work]$ db2 "select CREATE_TIME, varchar(TABSCHEMA,10) schema, varchar(TABNAME,20) table, varchar(INDNAME,30) index from syscat.indexes where TABNAME = 'TEST_TAB'" 

CREATE_TIME                SCHEMA     TABLE                INDEX                         
-------------------------- ---------- -------------------- ------------------------------
2022-08-09-01.52.24.287103 DB2INST1   TEST_TAB             TEST_TAB_I_C_CARD_100K        

  1 record(s) selected.
```

Therefore recreating or rebinding package will refresh the statistics.      

db2 "rebind DB2INST1.P777564618"




- [Go to content](#Contents)


## MISC.  

Situation trigger files.   
```
[root@lumenal1 .scripts]# pwd
/.scripts
[root@lumenal1 .scripts]# ls -al
total 132
drwxrwxrwx   2 root root   229 Feb 25 08:45 .
dr-xr-xr-x. 19 root root  4096 May 26 00:15 ..
-rwxrwxrwx   1 root root 13344 Feb  3 10:26 high_load
-rwxrwxrwx   1 root root 13376 Jan 28 15:51 pegmem_Linux
-rw-r--r--   1 root root  6647 Feb 24 16:59 print_banner.pl
-rwxrwxrwx   1 root root 18160 Jan 28 15:35 prog1
-rwxrwxrwx   1 root root 22280 Jan 28 15:35 prog2
-rwxrwxrwx   1 root root 22288 Jan 28 15:35 prog3
lrwxrwxrwx   1 root root    12 Jan 28 15:46 prog4 -> pegmem_Linux
lrwxrwxrwx   1 root root    17 Jan 28 15:46 prog5 -> spikecpu_Linux.sh
lrwxrwxrwx   1 root root     9 Feb  3 10:11 prog6 -> high_load
-rwxrwxrwx   1 root root   245 Feb 24 15:35 run_prog1
-rwxrwxrwx   1 root root   244 Feb 24 16:49 run_prog2
-rwxrwxrwx   1 root root   245 Feb 24 15:36 run_prog3
-rwxrwxrwx   1 root root   585 Feb 25 08:45 run_prog4
-rwxr-xr-x   1 root root   327 Feb 24 15:37 run_prog6
```

`recipe1` profile   
```
perl /.scripts/print_banner.pl recipe1
( nohup /.scripts/run_prog4 > /dev/null 2>&1 & )
```

`recipe2` profile
```
perl /.scripts/print_banner.pl recipe2
( nohup /.scripts/run_prog1 > /dev/null 2>&1 & )
```


`recipe3` profile
```
perl /.scripts/print_banner.pl recipe3
( nohup /.scripts/run_prog2 > /dev/null 2>&1 & )
```

`recipe4` profile
```
perl /.scripts/print_banner.pl recipe4
( /.scripts/run_prog3 > /dev/null 2>&1 & )
```

`recipe5` profile
```
perl /.scripts/print_banner.pl recipe5
( /.scripts/run_prog6 > /dev/null 2>&1 & )
```

- [Go to content](#Contents)

