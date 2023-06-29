[Go to main page](https://github.ibm.com/junsulee/c)

# CP4D

Kubenetes (aka k8s) .  

## Contents

- [CP4D](#cp4d)
  - [Contents](#contents)
  - [References](#references)
  - [Problem cases](#problem-cases)
    - [oadp backup failure](#oadp-backup-failure)
    - [Pods](#pods)


## References   

[Backing up and restoring an entire deployment](https://www.ibm.com/docs/en/cloud-paks/cp-data/4.0?topic=deployment-backing-up-restoring-entire)   

## Problem cases   

### oadp backup failure     

```
./cpd-cli oadp backup status backup-20230623 --details |grep Restic -A20    
..
Restic Backups:
  Completed:
    ..
    cpd/c-db2u-dv-db2u-0: bigsql
  Failed:
    cpd/c-db2u-dv-db2u-1: bigsql
  In Progress:
    cpd/c_db2u-dv-dvutils-0: dvutils
```

### Pods
- K8s is All about managing pods.   
- Pods in k8 can have one or more containers.     
  (Mostly one conatiner. A multi container is an exception.)   
- In a pod, you can have a volume as well so that files can be stored.    
- As Pods are not typically started by themselves as naked Pods, there are no good ways to start just a Pod from the command line.     
  (Do NOT run naked Pods !)
- However, Pods can be started from a YAML manifest, using `kubectl create -f mypod.yaml`. ( apiversion, kind, metadata, spec ... )     
