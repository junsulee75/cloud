
# oc output

Reference outputs    

## Contents

- [oc output](#oc-output)
  - [Contents](#contents)
- [Reference outputs](#reference-outputs)
  - [Initial resouces](#initial-resouces)
  - [Operations](#operations)
    - [Login to openshift on server](#login-to-openshift-on-server)
    - [Login using Openshift CLI](#login-using-openshift-cli)
    - [Log into each node from bastion node](#log-into-each-node-from-bastion-node)
      - [Configuration](#configuration)
    - [Showing service/ports/IP of pods](#showing-serviceportsip-of-pods)
  - [MISC.](#misc)
    - [`kubectl` vs `oc`](#kubectl-vs-oc)
  - [oc commands](#oc-commands)
    - [drain](#drain)
  - [To check](#to-check)
  - [References](#references)


# Reference outputs

## Initial resouces    

Node  
```
[root@bastion ~]# oc get node -o wide -A
NAME                  STATUS   ROLES                  AGE     VERSION            INTERNAL-IP     EXTERNAL-IP   OS-IMAGE                                                        KERNEL-VERSION                 CONTAINER-RUNTIME
master01.js.ocp.adl   Ready    control-plane,master   91d     v1.25.11+1485cc9   18.10.140.151   <none>        Red Hat Enterprise Linux CoreOS 412.86.202308161343-0 (Ootpa)   4.18.0-372.69.1.el8_6.x86_64   cri-o://1.25.4-3.rhaos4.12.git5869897.el8
master02.js.ocp.adl   Ready    control-plane,master   91d     v1.25.11+1485cc9   18.10.140.152   <none>        Red Hat Enterprise Linux CoreOS 412.86.202308161343-0 (Ootpa)   4.18.0-372.69.1.el8_6.x86_64   cri-o://1.25.4-3.rhaos4.12.git5869897.el8
master03.js.ocp.adl   Ready    control-plane,master   91d     v1.25.11+1485cc9   18.10.140.153   <none>        Red Hat Enterprise Linux CoreOS 412.86.202308161343-0 (Ootpa)   4.18.0-372.69.1.el8_6.x86_64   cri-o://1.25.4-3.rhaos4.12.git5869897.el8
worker01.js.ocp.adl   Ready    worker                 91d     v1.25.11+1485cc9   18.10.140.154   <none>        Red Hat Enterprise Linux CoreOS 412.86.202308161343-0 (Ootpa)   4.18.0-372.69.1.el8_6.x86_64   cri-o://1.25.4-3.rhaos4.12.git5869897.el8
worker02.js.ocp.adl   Ready    worker                 9d      v1.25.11+1485cc9   18.10.140.155   <none>        Red Hat Enterprise Linux CoreOS 412.86.202308161343-0 (Ootpa)   4.18.0-372.69.1.el8_6.x86_64   cri-o://1.25.4-3.rhaos4.12.git5869897.el8
worker03.js.ocp.adl   Ready    worker                 6h25m   v1.25.11+1485cc9   18.10.140.156   <none>        Red Hat Enterprise Linux CoreOS 412.86.202308161343-0 (Ootpa)   4.18.0-372.69.1.el8_6.x86_64   cri-o://1.25.4-3.rhaos4.12.git5869897.el8
```

pods   

```
[root@bastion ~]# oc get pod -o wide -A
NAMESPACE                                          NAME                                                        READY   STATUS      RESTARTS          AGE     IP              NODE                  NOMINATED NODE   READINESS GATES
openshift-apiserver-operator                       openshift-apiserver-operator-69bf9465f4-mpmvb               1/1     Running     3 (91d ago)       91d     121.156.0.9     master01.js.ocp.adl   <none>           <none>
openshift-apiserver                                apiserver-74c4dfdc84-9tn5c                                  2/2     Running     5683 (31d ago)    91d     121.156.0.90    master01.js.ocp.adl   <none>           <none>
openshift-apiserver                                apiserver-74c4dfdc84-kk9hw                                  2/2     Running     0                 21d     121.158.1.44    master02.js.ocp.adl   <none>           <none>
openshift-apiserver                                apiserver-74c4dfdc84-v9mzq                                  2/2     Running     241 (31d ago)     91d     121.157.0.22    master03.js.ocp.adl   <none>           <none>
openshift-authentication-operator                  authentication-operator-68b8d6d75f-wz2zk                    1/1     Running     9339 (31d ago)    91d     121.156.0.3     master01.js.ocp.adl   <none>           <none>
openshift-authentication                           oauth-openshift-7858b56cd8-h27cq                            1/1     Running     813 (40d ago)     91d     121.157.0.27    master03.js.ocp.adl   <none>           <none>
openshift-authentication                           oauth-openshift-7858b56cd8-lqf7x                            1/1     Running     0                 9d      121.156.1.46    master01.js.ocp.adl   <none>           <none>
openshift-authentication                           oauth-openshift-7858b56cd8-t876q                            1/1     Running     0                 21d     121.158.1.45    master02.js.ocp.adl   <none>           <none>
openshift-cloud-controller-manager-operator        cluster-cloud-controller-manager-operator-fb8cf4cb8-sx99s   2/2     Running     4 (91d ago)       91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-cloud-credential-operator                cloud-credential-operator-75bdb9ffdc-m9dnx                  2/2     Running     1 (91d ago)       91d     121.156.0.41    master01.js.ocp.adl   <none>           <none>
openshift-cluster-machine-approver                 machine-approver-6fc7f8d57d-bth47                           2/2     Running     3 (91d ago)       91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             cluster-node-tuning-operator-9b7bdf49d-52ghw                1/1     Running     3 (91d ago)       91d     121.156.0.44    master01.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             tuned-2969k                                                 1/1     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             tuned-2mvfs                                                 1/1     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             tuned-6zk9b                                                 1/1     Running     1                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             tuned-dtr79                                                 1/1     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             tuned-jxqlh                                                 1/1     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-cluster-node-tuning-operator             tuned-wkmkq                                                 1/1     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-cluster-samples-operator                 cluster-samples-operator-57d84c8697-dzdcn                   2/2     Running     0                 91d     121.156.0.62    master01.js.ocp.adl   <none>           <none>
openshift-cluster-storage-operator                 cluster-storage-operator-6c6dcb44cd-ttf2r                   1/1     Running     3 (91d ago)       91d     121.156.0.15    master01.js.ocp.adl   <none>           <none>
openshift-cluster-storage-operator                 csi-snapshot-controller-88c58cf98-5fcfp                     1/1     Running     1 (91d ago)       91d     121.156.0.19    master01.js.ocp.adl   <none>           <none>
openshift-cluster-storage-operator                 csi-snapshot-controller-88c58cf98-9lvl2                     1/1     Running     0                 91d     121.156.0.83    master01.js.ocp.adl   <none>           <none>
openshift-cluster-storage-operator                 csi-snapshot-controller-operator-6d977db574-5j29f           1/1     Running     2 (91d ago)       91d     121.156.0.6     master01.js.ocp.adl   <none>           <none>
openshift-cluster-storage-operator                 csi-snapshot-webhook-845c59f87f-2fmd6                       1/1     Running     0                 91d     121.156.0.82    master01.js.ocp.adl   <none>           <none>
openshift-cluster-storage-operator                 csi-snapshot-webhook-845c59f87f-sk26w                       1/1     Running     0                 91d     121.156.0.21    master01.js.ocp.adl   <none>           <none>
openshift-cluster-version                          cluster-version-operator-7bd7bdfcbd-dlxkj                   1/1     Running     4 (31d ago)       91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-config-operator                          openshift-config-operator-6dc6ccdd9d-b4mkn                  1/1     Running     13435 (31d ago)   91d     121.156.0.14    master01.js.ocp.adl   <none>           <none>
openshift-console-operator                         console-operator-69b7cfc4f9-lglxm                           2/2     Running     18390 (31d ago)   91d     121.156.0.68    master01.js.ocp.adl   <none>           <none>
openshift-console                                  console-5c5d8f9445-p8tw8                                    1/1     Running     0                 9d      121.157.0.245   master03.js.ocp.adl   <none>           <none>
openshift-console                                  console-5c5d8f9445-rshph                                    1/1     Running     0                 9d      121.158.1.0     master02.js.ocp.adl   <none>           <none>
openshift-console                                  downloads-84b54794-8tzg7                                    1/1     Running     16422 (31d ago)   91d     121.156.0.72    master01.js.ocp.adl   <none>           <none>
openshift-console                                  downloads-84b54794-fw25q                                    1/1     Running     0                 31d     121.157.0.252   master03.js.ocp.adl   <none>           <none>
openshift-controller-manager-operator              openshift-controller-manager-operator-5c859d46c8-8tlls      1/1     Running     3 (91d ago)       91d     121.156.0.13    master01.js.ocp.adl   <none>           <none>
openshift-controller-manager                       controller-manager-56f6cdfc6b-2dgqf                         1/1     Running     0                 25h     121.157.1.182   master03.js.ocp.adl   <none>           <none>
openshift-controller-manager                       controller-manager-56f6cdfc6b-mqjw5                         1/1     Running     0                 25h     121.156.1.70    master01.js.ocp.adl   <none>           <none>
openshift-controller-manager                       controller-manager-56f6cdfc6b-r58nd                         1/1     Running     0                 25h     121.158.1.4     master02.js.ocp.adl   <none>           <none>
openshift-dns-operator                             dns-operator-5bf8646788-pf9t5                               2/2     Running     0                 91d     121.156.0.37    master01.js.ocp.adl   <none>           <none>
openshift-dns                                      dns-default-4sz4b                                           2/2     Running     0                 91d     121.158.0.8     master02.js.ocp.adl   <none>           <none>
openshift-dns                                      dns-default-77r4c                                           2/2     Running     0                 91d     121.159.0.4     worker01.js.ocp.adl   <none>           <none>
openshift-dns                                      dns-default-bbvrg                                           2/2     Running     2                 6h25m   121.157.2.4     worker03.js.ocp.adl   <none>           <none>
openshift-dns                                      dns-default-fhrm2                                           2/2     Running     0                 9d      121.156.2.3     worker02.js.ocp.adl   <none>           <none>
openshift-dns                                      dns-default-jnkrm                                           2/2     Running     0                 91d     121.157.0.5     master03.js.ocp.adl   <none>           <none>
openshift-dns                                      dns-default-nld44                                           2/2     Running     12 (33d ago)      91d     121.156.0.54    master01.js.ocp.adl   <none>           <none>
openshift-dns                                      node-resolver-267m9                                         1/1     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-dns                                      node-resolver-28qwx                                         1/1     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-dns                                      node-resolver-hl76l                                         1/1     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-dns                                      node-resolver-nf84k                                         1/1     Running     1                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-dns                                      node-resolver-t59mp                                         1/1     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-dns                                      node-resolver-vwh42                                         1/1     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-etcd-operator                            etcd-operator-6957b76799-jh9g2                              1/1     Running     20 (31d ago)      91d     121.156.0.4     master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     etcd-guard-master01.js.ocp.adl                              1/1     Running     0                 91d     121.156.0.46    master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     etcd-guard-master02.js.ocp.adl                              1/1     Running     0                 91d     121.158.0.21    master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     etcd-guard-master03.js.ocp.adl                              1/1     Running     0                 91d     121.157.0.16    master03.js.ocp.adl   <none>           <none>
openshift-etcd                                     etcd-master01.js.ocp.adl                                    4/4     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     etcd-master02.js.ocp.adl                                    4/4     Running     2263 (21d ago)    91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     etcd-master03.js.ocp.adl                                    4/4     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-6-master03.js.ocp.adl                             0/1     Completed   0                 91d     121.157.0.14    master03.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-7-master02.js.ocp.adl                             0/1     Completed   0                 91d     121.158.0.18    master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-8-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.87    master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-8-master02.js.ocp.adl                             0/1     Completed   0                 91d     121.158.0.29    master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-8-master03.js.ocp.adl                             0/1     Completed   0                 91d     121.157.0.21    master03.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-9-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.98    master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-9-master02.js.ocp.adl                             0/1     Completed   0                 91d     121.158.0.38    master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     installer-9-master03.js.ocp.adl                             0/1     Completed   0                 91d     121.157.0.28    master03.js.ocp.adl   <none>           <none>
openshift-etcd                                     revision-pruner-8-master01.js.ocp.adl                       0/1     Completed   0                 91d     121.156.0.89    master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     revision-pruner-8-master02.js.ocp.adl                       0/1     Completed   0                 91d     121.158.0.28    master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     revision-pruner-8-master03.js.ocp.adl                       0/1     Completed   0                 91d     121.157.0.20    master03.js.ocp.adl   <none>           <none>
openshift-etcd                                     revision-pruner-9-master01.js.ocp.adl                       0/1     Completed   0                 91d     121.156.0.97    master01.js.ocp.adl   <none>           <none>
openshift-etcd                                     revision-pruner-9-master02.js.ocp.adl                       0/1     Completed   0                 91d     121.158.0.35    master02.js.ocp.adl   <none>           <none>
openshift-etcd                                     revision-pruner-9-master03.js.ocp.adl                       0/1     Completed   0                 91d     121.157.0.26    master03.js.ocp.adl   <none>           <none>
openshift-image-registry                           cluster-image-registry-operator-677f6df97b-rx6gq            1/1     Running     2 (91d ago)       91d     121.156.0.25    master01.js.ocp.adl   <none>           <none>
openshift-image-registry                           image-pruner-28452960-gclp8                                 0/1     Completed   0                 2d7h    121.159.1.149   worker01.js.ocp.adl   <none>           <none>
openshift-image-registry                           image-pruner-28454400-dz7kw                                 0/1     Completed   0                 31h     121.159.1.252   worker01.js.ocp.adl   <none>           <none>
openshift-image-registry                           image-pruner-28455840-7wbx5                                 0/1     Completed   0                 7h14m   121.159.0.109   worker01.js.ocp.adl   <none>           <none>
openshift-image-registry                           node-ca-4kwfp                                               1/1     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-image-registry                           node-ca-h8w26                                               1/1     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-image-registry                           node-ca-kcflq                                               1/1     Running     1                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-image-registry                           node-ca-mlm4n                                               1/1     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-image-registry                           node-ca-tpqzk                                               1/1     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-image-registry                           node-ca-vp9r8                                               1/1     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-ingress-canary                           ingress-canary-mbvqn                                        1/1     Running     1                 6h25m   121.157.2.3     worker03.js.ocp.adl   <none>           <none>
openshift-ingress-canary                           ingress-canary-qwq7z                                        1/1     Running     0                 91d     121.159.0.6     worker01.js.ocp.adl   <none>           <none>
openshift-ingress-canary                           ingress-canary-snhm8                                        1/1     Running     0                 9d      121.156.2.4     worker02.js.ocp.adl   <none>           <none>
openshift-ingress-operator                         ingress-operator-bf47bf8f7-tcsh7                            2/2     Running     4 (91d ago)       91d     121.156.0.28    master01.js.ocp.adl   <none>           <none>
openshift-ingress                                  router-default-7cb94b9d94-26s97                             1/1     Running     0                 21d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-ingress                                  router-default-7cb94b9d94-6gd9p                             1/1     Running     0                 30d     18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-insights                                 insights-operator-6b485bc857-gfbf6                          1/1     Running     1 (91d ago)       91d     121.156.0.12    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver-operator                  kube-apiserver-operator-6b59dc6995-7lfsc                    1/1     Running     3 (91d ago)       91d     121.156.0.10    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-17-master01.js.ocp.adl                            0/1     Completed   0                 61d     121.156.0.231   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-18-master01.js.ocp.adl                            0/1     Completed   0                 61d     121.156.0.234   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-18-master02.js.ocp.adl                            0/1     Completed   0                 61d     121.158.1.214   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-18-master03.js.ocp.adl                            0/1     Completed   0                 61d     121.157.0.219   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-19-master01.js.ocp.adl                            0/1     Completed   0                 59d     121.156.1.144   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-19-master02.js.ocp.adl                            0/1     Completed   0                 59d     121.158.0.156   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-19-master03.js.ocp.adl                            0/1     Completed   0                 59d     121.157.0.43    master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-20-master01.js.ocp.adl                            0/1     Completed   0                 51d     121.156.0.251   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-20-master02.js.ocp.adl                            0/1     Completed   0                 51d     121.158.0.251   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-20-master03.js.ocp.adl                            0/1     Completed   0                 51d     121.157.0.220   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-21-master01.js.ocp.adl                            0/1     Completed   0                 46d     121.156.0.255   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-21-master02.js.ocp.adl                            0/1     Error       0                 46d     121.158.0.37    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-21-master03.js.ocp.adl                            0/1     Completed   0                 46d     121.157.1.134   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-21-retry-1-master02.js.ocp.adl                    0/1     Completed   0                 46d     121.158.0.40    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-28-master01.js.ocp.adl                            0/1     Completed   0                 19d     121.156.1.35    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-28-master02.js.ocp.adl                            0/1     Completed   0                 19d     121.158.1.143   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-28-master03.js.ocp.adl                            0/1     Completed   0                 19d     121.157.1.70    master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-30-master01.js.ocp.adl                            0/1     Completed   0                 14d     121.156.1.45    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-30-master02.js.ocp.adl                            0/1     Completed   0                 14d     121.158.0.53    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-30-master03.js.ocp.adl                            0/1     Completed   0                 14d     121.157.1.6     master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-31-master01.js.ocp.adl                            0/1     Completed   0                 4d13h   121.156.1.48    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-31-master02.js.ocp.adl                            0/1     Completed   0                 4d13h   121.158.1.237   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-31-master03.js.ocp.adl                            0/1     Completed   0                 4d13h   121.157.1.156   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-32-master01.js.ocp.adl                            0/1     Completed   0                 25h     121.156.1.69    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-32-master02.js.ocp.adl                            0/1     Completed   0                 25h     121.158.1.6     master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           installer-32-master03.js.ocp.adl                            0/1     Completed   0                 25h     121.157.1.184   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           kube-apiserver-guard-master01.js.ocp.adl                    1/1     Running     0                 91d     121.156.0.63    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           kube-apiserver-guard-master02.js.ocp.adl                    1/1     Running     0                 91d     121.158.0.25    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           kube-apiserver-guard-master03.js.ocp.adl                    1/1     Running     0                 91d     121.157.0.17    master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           kube-apiserver-master01.js.ocp.adl                          5/5     Running     0                 25h     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           kube-apiserver-master02.js.ocp.adl                          5/5     Running     0                 25h     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           kube-apiserver-master03.js.ocp.adl                          5/5     Running     0                 25h     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-17-master01.js.ocp.adl                      0/1     Completed   0                 61d     121.156.0.230   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-17-master02.js.ocp.adl                      0/1     Completed   0                 61d     121.158.1.206   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-17-master03.js.ocp.adl                      0/1     Completed   0                 61d     121.157.0.212   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-18-master01.js.ocp.adl                      0/1     Completed   0                 61d     121.156.0.235   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-18-master02.js.ocp.adl                      0/1     Completed   0                 61d     121.158.1.210   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-18-master03.js.ocp.adl                      0/1     Completed   0                 61d     121.157.0.217   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-19-master01.js.ocp.adl                      0/1     Completed   0                 59d     121.156.1.143   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-19-master02.js.ocp.adl                      0/1     Completed   0                 59d     121.158.0.152   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-19-master03.js.ocp.adl                      0/1     Completed   0                 59d     121.157.0.38    master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-20-master01.js.ocp.adl                      0/1     Completed   0                 51d     121.156.0.250   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-20-master02.js.ocp.adl                      0/1     Completed   0                 51d     121.158.0.247   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-20-master03.js.ocp.adl                      0/1     Completed   0                 51d     121.157.0.219   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-21-master01.js.ocp.adl                      0/1     Completed   0                 46d     121.156.0.252   master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-21-master02.js.ocp.adl                      0/1     Completed   0                 46d     121.158.0.35    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-21-master03.js.ocp.adl                      0/1     Completed   0                 46d     121.157.1.128   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-28-master01.js.ocp.adl                      0/1     Completed   0                 19d     121.156.1.34    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-28-master02.js.ocp.adl                      0/1     Completed   0                 19d     121.158.1.140   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-28-master03.js.ocp.adl                      0/1     Completed   0                 19d     121.157.1.68    master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-29-master01.js.ocp.adl                      0/1     Completed   0                 14d     121.156.1.36    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-29-master02.js.ocp.adl                      0/1     Completed   0                 14d     121.158.0.45    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-29-master03.js.ocp.adl                      0/1     Completed   0                 14d     121.157.1.0     master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-30-master01.js.ocp.adl                      0/1     Completed   0                 14d     121.156.1.42    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-30-master02.js.ocp.adl                      0/1     Completed   0                 14d     121.158.0.50    master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-30-master03.js.ocp.adl                      0/1     Completed   0                 14d     121.157.1.4     master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-31-master01.js.ocp.adl                      0/1     Completed   0                 4d13h   121.156.1.47    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-31-master02.js.ocp.adl                      0/1     Completed   0                 4d13h   121.158.1.235   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-31-master03.js.ocp.adl                      0/1     Completed   0                 4d13h   121.157.1.155   master03.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-32-master01.js.ocp.adl                      0/1     Completed   0                 25h     121.156.1.66    master01.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-32-master02.js.ocp.adl                      0/1     Completed   0                 25h     121.158.0.255   master02.js.ocp.adl   <none>           <none>
openshift-kube-apiserver                           revision-pruner-32-master03.js.ocp.adl                      0/1     Completed   0                 25h     121.157.1.179   master03.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager-operator         kube-controller-manager-operator-9865fd47-72x2c             1/1     Running     3 (91d ago)       91d     121.156.0.7     master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  installer-5-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.53    master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  installer-6-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.71    master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  installer-7-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.81    master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  installer-7-master02.js.ocp.adl                             0/1     Completed   0                 91d     121.158.0.17    master02.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  installer-7-master03.js.ocp.adl                             0/1     Completed   0                 91d     121.157.0.8     master03.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  kube-controller-manager-guard-master01.js.ocp.adl           1/1     Running     0                 91d     121.156.0.58    master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  kube-controller-manager-guard-master02.js.ocp.adl           1/1     Running     0                 91d     121.158.0.22    master02.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  kube-controller-manager-guard-master03.js.ocp.adl           1/1     Running     0                 91d     121.157.0.18    master03.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  kube-controller-manager-master01.js.ocp.adl                 4/4     Running     1086 (21d ago)    91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  kube-controller-manager-master02.js.ocp.adl                 4/4     Running     3100 (21d ago)    91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  kube-controller-manager-master03.js.ocp.adl                 4/4     Running     1146 (30d ago)    91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  revision-pruner-6-master01.js.ocp.adl                       0/1     Completed   0                 91d     121.156.0.75    master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  revision-pruner-7-master01.js.ocp.adl                       0/1     Completed   0                 91d     121.156.0.80    master01.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  revision-pruner-7-master02.js.ocp.adl                       0/1     Completed   0                 91d     121.158.0.9     master02.js.ocp.adl   <none>           <none>
openshift-kube-controller-manager                  revision-pruner-7-master03.js.ocp.adl                       0/1     Completed   0                 91d     121.157.0.12    master03.js.ocp.adl   <none>           <none>
openshift-kube-scheduler-operator                  openshift-kube-scheduler-operator-ddbdd86f5-fm95j           1/1     Running     3 (91d ago)       91d     121.156.0.2     master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           installer-3-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.29    master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           installer-5-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.52    master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           installer-6-master01.js.ocp.adl                             0/1     Completed   0                 91d     121.156.0.67    master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           installer-6-master02.js.ocp.adl                             0/1     Completed   0                 91d     121.158.0.19    master02.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           installer-6-master03.js.ocp.adl                             0/1     Completed   0                 91d     121.157.0.9     master03.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           openshift-kube-scheduler-guard-master01.js.ocp.adl          1/1     Running     0                 91d     121.156.0.35    master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           openshift-kube-scheduler-guard-master02.js.ocp.adl          1/1     Running     0                 91d     121.158.0.23    master02.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           openshift-kube-scheduler-guard-master03.js.ocp.adl          1/1     Running     0                 91d     121.157.0.15    master03.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           openshift-kube-scheduler-master01.js.ocp.adl                3/3     Running     8770 (31d ago)    91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           openshift-kube-scheduler-master02.js.ocp.adl                3/3     Running     1823 (21d ago)    91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           openshift-kube-scheduler-master03.js.ocp.adl                3/3     Running     558 (31d ago)     91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           revision-pruner-6-master01.js.ocp.adl                       0/1     Completed   0                 91d     121.156.0.74    master01.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           revision-pruner-6-master02.js.ocp.adl                       0/1     Completed   0                 91d     121.158.0.11    master02.js.ocp.adl   <none>           <none>
openshift-kube-scheduler                           revision-pruner-6-master03.js.ocp.adl                       0/1     Completed   0                 91d     121.157.0.13    master03.js.ocp.adl   <none>           <none>
openshift-kube-storage-version-migrator-operator   kube-storage-version-migrator-operator-684cdb86bd-b9skh     1/1     Running     3 (91d ago)       91d     121.156.0.5     master01.js.ocp.adl   <none>           <none>
openshift-kube-storage-version-migrator            migrator-747887548d-2kdb7                                   1/1     Running     0                 91d     121.156.0.18    master01.js.ocp.adl   <none>           <none>
openshift-machine-api                              cluster-autoscaler-operator-858745f58b-86mq4                2/2     Running     3 (91d ago)       91d     121.156.0.38    master01.js.ocp.adl   <none>           <none>
openshift-machine-api                              cluster-baremetal-operator-5564f86478-rcjxz                 2/2     Running     0                 91d     121.156.0.42    master01.js.ocp.adl   <none>           <none>
openshift-machine-api                              control-plane-machine-set-operator-6847686765-gpf5r         1/1     Running     3 (91d ago)       91d     121.156.0.43    master01.js.ocp.adl   <none>           <none>
openshift-machine-api                              machine-api-operator-6997c77f54-qb4n4                       2/2     Running     2 (91d ago)       91d     121.156.0.39    master01.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-controller-db78b6c95-8h8wh                   2/2     Running     2 (91d ago)       91d     121.156.0.31    master01.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-daemon-9cwzr                                 2/2     Running     2                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-daemon-bsvcj                                 2/2     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-daemon-lqs28                                 2/2     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-daemon-mm2j4                                 2/2     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-daemon-rfsdq                                 2/2     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-daemon-sbfpk                                 2/2     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-operator-58b98cd95b-7wt5f                    1/1     Running     2 (91d ago)       91d     121.156.0.11    master01.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-server-f2hfd                                 1/1     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-server-lfqx2                                 1/1     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-machine-config-operator                  machine-config-server-tx624                                 1/1     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-marketplace                              certified-operators-mhb9m                                   1/1     Running     0                 5h28m   121.158.0.77    master02.js.ocp.adl   <none>           <none>
openshift-marketplace                              community-operators-kmbsv                                   1/1     Running     0                 121m    121.158.0.130   master02.js.ocp.adl   <none>           <none>
openshift-marketplace                              marketplace-operator-79f9485765-5wpxv                       1/1     Running     6195 (31d ago)    91d     121.156.0.22    master01.js.ocp.adl   <none>           <none>
openshift-marketplace                              redhat-marketplace-d6t4z                                    1/1     Running     0                 12h     121.158.1.211   master02.js.ocp.adl   <none>           <none>
openshift-marketplace                              redhat-operators-5f9j9                                      1/1     Running     0                 8h      121.157.0.41    master03.js.ocp.adl   <none>           <none>
openshift-monitoring                               alertmanager-main-0                                         6/6     Running     0                 9d      121.156.2.8     worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               alertmanager-main-1                                         6/6     Running     0                 9d      121.159.0.214   worker01.js.ocp.adl   <none>           <none>
openshift-monitoring                               cluster-monitoring-operator-7b8b6984cc-nkxpf                2/2     Running     0                 91d     121.156.0.23    master01.js.ocp.adl   <none>           <none>
openshift-monitoring                               kube-state-metrics-6988ff97d9-qn7ff                         3/3     Running     0                 9d      121.156.2.9     worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               node-exporter-b7d2z                                         2/2     Running     0                 9d      18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-monitoring                               node-exporter-d89bq                                         2/2     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               node-exporter-hcr59                                         2/2     Running     2                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-monitoring                               node-exporter-p9vtg                                         2/2     Running     0                 9d      18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-monitoring                               node-exporter-s2phr                                         2/2     Running     0                 9d      18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-monitoring                               node-exporter-zq8nk                                         2/2     Running     0                 9d      18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-monitoring                               openshift-state-metrics-598d6874b8-p7xtl                    3/3     Running     0                 9d      121.156.2.5     worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-adapter-7c999fcd8f-j48c9                         1/1     Running     0                 25h     121.159.0.31    worker01.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-adapter-7c999fcd8f-xvbln                         1/1     Running     0                 25h     121.156.2.42    worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-k8s-0                                            6/6     Running     0                 9d      121.156.2.11    worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-k8s-1                                            6/6     Running     0                 9d      121.159.0.216   worker01.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-operator-77874c9bb6-dtclr                        2/2     Running     0                 9d      121.158.0.254   master02.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-operator-admission-webhook-6fdc6ffb54-2gjlk      1/1     Running     0                 21d     121.159.0.26    worker01.js.ocp.adl   <none>           <none>
openshift-monitoring                               prometheus-operator-admission-webhook-6fdc6ffb54-msdq9      1/1     Running     0                 30d     121.156.2.2     worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               telemeter-client-5d7698fbd-72nz8                            3/3     Running     0                 9d      121.156.2.10    worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               thanos-querier-65659bf66c-fk8rk                             6/6     Running     0                 9d      121.156.2.7     worker02.js.ocp.adl   <none>           <none>
openshift-monitoring                               thanos-querier-65659bf66c-mcdb4                             6/6     Running     0                 9d      121.159.0.215   worker01.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-additional-cni-plugins-n9ptl                         1/1     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-additional-cni-plugins-p964v                         1/1     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-additional-cni-plugins-q8hjj                         1/1     Running     1                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-additional-cni-plugins-qnvqd                         1/1     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-additional-cni-plugins-tht2x                         1/1     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-additional-cni-plugins-x9f7n                         1/1     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-admission-controller-676cd96584-prtrp                2/2     Running     0                 91d     121.157.0.23    master03.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-admission-controller-676cd96584-r4474                2/2     Running     0                 31d     121.156.1.16    master01.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-lvwrt                                                1/1     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-mr2k8                                                1/1     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-mz5bf                                                1/1     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-npmr4                                                1/1     Running     1                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-qphm4                                                1/1     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-multus                                   multus-rkjcv                                                1/1     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-multus                                   network-metrics-daemon-bpcwc                                2/2     Running     2                 6h26m   121.157.2.5     worker03.js.ocp.adl   <none>           <none>
openshift-multus                                   network-metrics-daemon-hcglj                                2/2     Running     0                 91d     121.157.0.7     master03.js.ocp.adl   <none>           <none>
openshift-multus                                   network-metrics-daemon-jn7jw                                2/2     Running     0                 91d     121.158.0.10    master02.js.ocp.adl   <none>           <none>
openshift-multus                                   network-metrics-daemon-lb2hl                                2/2     Running     0                 9d      121.156.2.6     worker02.js.ocp.adl   <none>           <none>
openshift-multus                                   network-metrics-daemon-lzlkv                                2/2     Running     0                 91d     121.156.0.33    master01.js.ocp.adl   <none>           <none>
openshift-multus                                   network-metrics-daemon-qkldq                                2/2     Running     0                 91d     121.159.0.8     worker01.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-source-684c97f996-blpxq                       1/1     Running     0                 21d     121.159.0.25    worker01.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-target-5vmf6                                  1/1     Running     0                 91d     121.159.0.9     worker01.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-target-ccmdj                                  1/1     Running     1                 6h26m   121.157.2.2     worker03.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-target-cvszb                                  1/1     Running     0                 91d     121.157.0.10    master03.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-target-fbcpz                                  1/1     Running     0                 91d     121.158.0.12    master02.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-target-mnlbn                                  1/1     Running     0                 9d      121.156.2.12    worker02.js.ocp.adl   <none>           <none>
openshift-network-diagnostics                      network-check-target-z6n5j                                  1/1     Running     0                 91d     121.156.0.17    master01.js.ocp.adl   <none>           <none>
openshift-network-operator                         network-operator-56c98495dc-cn4cq                           1/1     Running     4 (42d ago)       91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-oauth-apiserver                          apiserver-6d9c6dfcb9-d6cm4                                  1/1     Running     667 (31d ago)     91d     121.157.0.19    master03.js.ocp.adl   <none>           <none>
openshift-oauth-apiserver                          apiserver-6d9c6dfcb9-fjn4b                                  1/1     Running     6839 (31d ago)    91d     121.156.0.88    master01.js.ocp.adl   <none>           <none>
openshift-oauth-apiserver                          apiserver-6d9c6dfcb9-gr6rc                                  1/1     Running     0                 21d     121.158.1.41    master02.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               catalog-operator-55985d7f59-74mrl                           0/1     Running     8695 (31d ago)    91d     121.156.0.45    master01.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               collect-profiles-28456230-jkhr2                             0/1     Completed   0                 44m     121.159.0.136   worker01.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               collect-profiles-28456245-mrz4b                             0/1     Completed   0                 29m     121.159.0.137   worker01.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               collect-profiles-28456260-r5sj8                             0/1     Completed   0                 14m     121.159.0.138   worker01.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               olm-operator-8666655865-8j5lj                               1/1     Running     828 (69d ago)     91d     121.156.0.27    master01.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               package-server-manager-64fb9f5868-nspt6                     1/1     Running     5822 (31d ago)    91d     121.156.0.16    master01.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               packageserver-7bbc566d7-4q485                               1/1     Running     0                 31d     121.157.0.253   master03.js.ocp.adl   <none>           <none>
openshift-operator-lifecycle-manager               packageserver-7bbc566d7-m5pqr                               1/1     Running     10204 (31d ago)   91d     121.156.0.30    master01.js.ocp.adl   <none>           <none>
openshift-route-controller-manager                 route-controller-manager-5f98db69b9-qxd9z                   1/1     Running     0                 25h     121.157.1.181   master03.js.ocp.adl   <none>           <none>
openshift-route-controller-manager                 route-controller-manager-5f98db69b9-th25x                   1/1     Running     0                 25h     121.156.1.71    master01.js.ocp.adl   <none>           <none>
openshift-route-controller-manager                 route-controller-manager-5f98db69b9-x2mf2                   1/1     Running     0                 25h     121.158.1.3     master02.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-b8ptb                                                   2/2     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-controller-4c774                                        2/2     Running     0                 91d     18.10.140.152   master02.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-controller-85glv                                        2/2     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-controller-bqwgr                                        2/2     Running     2 (91d ago)       91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-dqqxh                                                   2/2     Running     0                 91d     18.10.140.153   master03.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-flg6q                                                   2/2     Running     0                 9d      18.10.140.155   worker02.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-fwdgw                                                   2/2     Running     2                 6h26m   18.10.140.156   worker03.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-gnx2w                                                   2/2     Running     0                 91d     18.10.140.151   master01.js.ocp.adl   <none>           <none>
openshift-sdn                                      sdn-r4stp                                                   2/2     Running     0                 91d     18.10.140.154   worker01.js.ocp.adl   <none>           <none>
openshift-service-ca-operator                      service-ca-operator-5d458d69cd-djn5m                        1/1     Running     2 (91d ago)       91d     121.156.0.8     master01.js.ocp.adl   <none>           <none>
openshift-service-ca                               service-ca-7dd9c96675-w6ldg                                 1/1     Running     2 (91d ago)       91d     121.156.0.20    master01.js.ocp.adl   <none>           <none>
```


## Operations
### Login to openshift on server 

```
[root@bastion ~]# oc get all
error: You must be logged in to the server (Unauthorized)

[root@bastion ~]# oc login -u kubeadmin -p KLECG-2dDC6-JfS8r-x4iY8 https://localhost:6443

Login successful.

You have access to 61 projects, the list has been suppressed. You can list all projects with ' projects'

Using project "sandy".

[root@bastion ~]# oc version
Client Version: 4.6.48
Server Version: 4.6.48
Kubernetes Version: v1.19.14+fcff70a

[root@bastion ~]# oc get all -o wide
NAME                                                             READY   STATUS      RESTARTS   AGE     IP              NODE                  NOMINATED NODE   READINESS GATES
pod/c-db2oltp-1652327406348200-db2u-0                            1/1     Running     0          10d     121.157.2.86    worker01.js.ocp.adl   <none>           <none>
pod/c-db2oltp-1652327406348200-etcd-0                            1/1     Running     0          10d     121.159.1.183   worker03.js.ocp.adl   <none>           <none>
pod/c-db2oltp-1652327406348200-instdb-bc7ck                      0/1     Completed   0          10d     121.157.2.85    worker01.js.ocp.adl   <none>           <none>
pod/c-db2oltp-1652327406348200-restore-morph-gqzg7               0/1     Completed   0          10d     121.157.2.87    worker01.js.ocp.adl   <none>           <none>
pod/c-ibm-dmc-1652329764322098-redis-m-0                         4/4     Running     0          10d     121.159.1.218   worker03.js.ocp.adl   <none>           <none>
pod/c-ibm-dmc-1652329764322098-redis-m-1                         4/4     Running     0          10d     121.156.2.42    worker02.js.ocp.adl   <none>           <none>
pod/c-ibm-dmc-1652329764322098-redis-m-2                         4/4     Running     0          10d     121.157.2.90    worker01.js.ocp.adl   <none>           <none>
pod/c-ibm-dmc-1652329764322098-redis-s-0                         4/4     Running     1          10d     121.159.1.237   worker03.js.ocp.adl   <none>           <none>
pod/c-ibm-dmc-1652329764322098-redis-s-1                         4/4     Running     1          10d     121.156.2.53    worker02.js.ocp.adl   <none>           <none>
pod/c-ibm-dmc-1652329764322098-redis-s-2                         4/4     Running     1          10d     121.157.2.96    worker01.js.ocp.adl   <none>           <none>
pod/create-secrets-job-fvqkk                                     0/1     Completed   0          2d21h   121.159.0.31    worker03.js.ocp.adl   <none>           <none>
pod/create-secrets-job-mzsqz                                     0/1     Completed   0          2d22h   121.157.2.172   worker01.js.ocp.adl   <none>           <none>
pod/create-secrets-job-z9ngw                                     0/1     Completed   0          10d     121.156.2.28    worker02.js.ocp.adl   <none>           <none>
pod/diagnostics-cronjob-1653199800-xm62w                         0/1     Completed   0          9m3s    121.159.0.219   worker03.js.ocp.adl   <none>           <none>
pod/dsx-influxdb-0                                               1/1     Running     0          2d19h   121.159.0.93    worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-admin-857cf6499d-nz66h              1/1     Running     1          10d     121.156.2.44    worker02.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-admin-857cf6499d-vqp6v              1/1     Running     0          10d     121.159.1.226   worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-dbapi-5495cd9bf8-hhph5              1/1     Running     1          10d     121.156.2.43    worker02.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-dbapi-5495cd9bf8-qs652              1/1     Running     0          10d     121.157.2.91    worker01.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-explain-58cf5d8f64-hdmpb            1/1     Running     0          10d     121.157.2.93    worker01.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-explain-58cf5d8f64-hr5hd            1/1     Running     0          10d     121.159.1.228   worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-job-scheduler-594fd4ff8b-b7jsx      1/1     Running     0          10d     121.159.1.221   worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-monitor-0                           1/1     Running     1          10d     121.157.2.94    worker01.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-nginx-6cbdc7d65c-bq7rr              1/1     Running     0          10d     121.159.1.229   worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-nginx-6cbdc7d65c-r2cbd              1/1     Running     2          10d     121.156.2.45    worker02.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-registry-manager-68798b4895-bnztw   1/1     Running     0          10d     121.159.1.219   worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-1652329764322098-runsql-56bcbdd89b-ks9jz             1/1     Running     0          10d     121.159.1.227   worker03.js.ocp.adl   <none>           <none>
pod/ibm-dmc-addon-api-7f46486979-jhfqg                           1/1     Running     0          10d     121.157.2.88    worker01.js.ocp.adl   <none>           <none>
pod/ibm-dmc-addon-ui-55b8c9965-mrt9h                             1/1     Running     0          10d     121.159.1.205   worker03.js.ocp.adl   <none>           <none>
pod/ibm-nginx-8586d4858c-dwnv9                                   1/1     Running     0          2d20h   121.156.3.72    worker02.js.ocp.adl   <none>           <none>
pod/ibm-nginx-8586d4858c-lghzj                                   1/1     Running     0          2d20h   121.159.0.59    worker03.js.ocp.adl   <none>           <none>
pod/setup-nginx-job-qq6q5                                        0/1     Completed   0          2d21h   121.156.3.67    worker02.js.ocp.adl   <none>           <none>
pod/setup-nginx-job-zcvrs                                        0/1     Completed   0          10d     121.157.2.23    worker01.js.ocp.adl   <none>           <none>
pod/usermgmt-5bc9bdf84d-jtdtp                                    1/1     Running     0          2d21h   121.159.0.33    worker03.js.ocp.adl   <none>           <none>
pod/usermgmt-5bc9bdf84d-lkpg9                                    1/1     Running     0          2d21h   121.157.2.173   worker01.js.ocp.adl   <none>           <none>
pod/watchdog-alert-monitoring-cronjob-1653199800-qcw6r           0/1     Completed   0          9m3s    121.159.0.220   worker03.js.ocp.adl   <none>           <none>
pod/zen-audit-559f785bb7-rhw85                                   1/1     Running     0          2d20h   121.157.2.179   worker01.js.ocp.adl   <none>           <none>
pod/zen-core-7479564977-4p4ct                                    1/1     Running     0          2d20h   121.156.3.76    worker02.js.ocp.adl   <none>           <none>
pod/zen-core-7479564977-qrtlp                                    1/1     Running     0          2d20h   121.157.2.180   worker01.js.ocp.adl   <none>           <none>
pod/zen-core-api-78b44cb4f8-66tkz                                1/1     Running     0          2d20h   121.157.2.181   worker01.js.ocp.adl   <none>           <none>
pod/zen-core-api-78b44cb4f8-q2nkl                                1/1     Running     0          2d20h   121.156.3.74    worker02.js.ocp.adl   <none>           <none>
pod/zen-data-sorcerer-86d78f795f-fj8dh                           1/1     Running     0          2d19h   121.156.3.79    worker02.js.ocp.adl   <none>           <none>
pod/zen-database-core-57999565b-csd5c                            1/1     Running     0          10d     121.159.1.176   worker03.js.ocp.adl   <none>           <none>
pod/zen-databases-5d9c5cc65f-n228m                               1/1     Running     0          10d     121.157.2.82    worker01.js.ocp.adl   <none>           <none>
pod/zen-databases-5d9c5cc65f-pj7vw                               1/1     Running     0          10d     121.159.1.177   worker03.js.ocp.adl   <none>           <none>
pod/zen-metastoredb-0                                            1/1     Running     0          2d22h   121.159.0.18    worker03.js.ocp.adl   <none>           <none>
pod/zen-metastoredb-1                                            1/1     Running     0          2d22h   121.157.2.170   worker01.js.ocp.adl   <none>           <none>
pod/zen-metastoredb-2                                            1/1     Running     0          2d22h   121.156.3.53    worker02.js.ocp.adl   <none>           <none>
pod/zen-post-requisite-job-c5hls                                 0/1     Completed   0          2d20h   121.157.2.193   worker01.js.ocp.adl   <none>           <none>
pod/zen-post-requisite-job-rht5b                                 0/1     Completed   0          10d     121.156.2.37    worker02.js.ocp.adl   <none>           <none>
pod/zen-pre-requisite-job-6qm69                                  0/1     Completed   0          2d20h   121.156.3.73    worker02.js.ocp.adl   <none>           <none>
pod/zen-pre-requisite-job-rfpt8                                  0/1     Completed   0          10d     121.159.1.111   worker03.js.ocp.adl   <none>           <none>
pod/zen-watchdog-9bf4cb8f6-bc7gz                                 1/1     Running     0          2d19h   121.156.3.80    worker02.js.ocp.adl   <none>           <none>
pod/zen-watchdog-cronjob-1653199800-jtw9d                        0/1     Completed   0          9m3s    121.159.0.221   worker03.js.ocp.adl   <none>           <none>
pod/zen-watchdog-post-requisite-job-qln2r                        0/1     Completed   0          2d19h   121.157.2.204   worker01.js.ocp.adl   <none>           <none>
pod/zen-watcher-958578cd6-qlxf2                                  1/1     Running     0          2d20h   121.156.3.75    worker02.js.ocp.adl   <none>           <none>

NAME                                                 TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                                                           AGE     SELECTOR
service/c-db2oltp-1652327406348200-db2u              ClusterIP   136.32.208.156   <none>        50000/TCP,50001/TCP,25000/TCP,25001/TCP,25002/TCP,25003/TCP,25004/TCP,25005/TCP   10d     app=db2oltp-1652327406348200,component=db2oltp,formation_id=db2oltp-1652327406348200,role=db,type=engine
service/c-db2oltp-1652327406348200-db2u-engn-svc     NodePort    136.32.74.36     <none>        50000:30257/TCP,50001:31757/TCP                                                   10d     app=db2oltp-1652327406348200,component=db2oltp,formation_id=db2oltp-1652327406348200,role=db,type=engine
service/c-db2oltp-1652327406348200-db2u-internal     ClusterIP   None             <none>        50000/TCP,9443/TCP,50052/TCP                                                      10d     app=db2oltp-1652327406348200,component=db2oltp,formation_id=db2oltp-1652327406348200,role=db,type=engine
service/c-db2oltp-1652327406348200-etcd              ClusterIP   None             <none>        2379/TCP,2380/TCP                                                                 10d     app=db2oltp-1652327406348200,component=etcd,db2u/cpdbr=db2u,formation_id=db2oltp-1652327406348200,icpdsupport/addOnId=db2oltp,icpdsupport/app=db2oltp-1652327406348200,icpdsupport/createdBy=1000330999,icpdsupport/serviceInstanceId=1652327406348200
service/c-ibm-dmc-1652329764322098-redis-m           ClusterIP   None             <none>        15000/TCP,16000/TCP                                                               10d     formation_id=ibm-dmc-1652329764322098-redis,role=m
service/c-ibm-dmc-1652329764322098-redis-m-metrics   ClusterIP   None             <none>        9000/TCP                                                                          10d     formation_id=ibm-dmc-1652329764322098-redis,role=m
service/c-ibm-dmc-1652329764322098-redis-p           ClusterIP   None             <none>        16000/TCP                                                                         10d     cluster_role=leader,formation_id=ibm-dmc-1652329764322098-redis
service/c-ibm-dmc-1652329764322098-redis-s           ClusterIP   None             <none>        26379/TCP,15000/TCP,9000/TCP                                                      10d     formation_id=ibm-dmc-1652329764322098-redis,role=s
service/database-core-svc                            ClusterIP   136.32.123.169   <none>        3023/TCP,3025/TCP                                                                 10d     app.kubernetes.io/component=zen-database-core,app.kubernetes.io/instance=0025-databases,app.kubernetes.io/managed-by=0025-databases,app.kubernetes.io/name=0025-databases,app=0025-databases,component=zen-database-core,enabled=true,icpdsupport/addOnId=databases,icpdsupport/app=database,release=0025-databases
service/dsx-influxdb                                 ClusterIP   136.32.20.166    <none>        8086/TCP                                                                          10d     app.kubernetes.io/component=dsx-influxdb,app.kubernetes.io/instance=zen-adv,app.kubernetes.io/managed-by=zen-adv,app.kubernetes.io/name=zen-adv,app=zen-adv,component=dsx-influxdb,release=zen-adv
service/ibm-dmc-1652329764322098-admin               ClusterIP   136.32.241.194   <none>        8443/TCP                                                                          10d     app=dmc,component=admin,release=1652329764322098
service/ibm-dmc-1652329764322098-dbapi               ClusterIP   136.32.245.71    <none>        8443/TCP                                                                          10d     app=dmc,component=dbapi,release=1652329764322098
service/ibm-dmc-1652329764322098-explain             ClusterIP   136.32.82.201    <none>        8443/TCP                                                                          10d     app=dmc,component=explain,release=1652329764322098
service/ibm-dmc-1652329764322098-job-scheduler       ClusterIP   136.32.0.107     <none>        8443/TCP                                                                          10d     app=dmc,component=job_scheduler,release=1652329764322098
service/ibm-dmc-1652329764322098-monitor             ClusterIP   136.32.235.211   <none>        8443/TCP                                                                          10d     app=dmc,component=monitor,release=1652329764322098
service/ibm-dmc-1652329764322098-monitor-stateful    ClusterIP   None             <none>        8443/TCP                                                                          10d     app=dmc,component=monitor,release=1652329764322098
service/ibm-dmc-1652329764322098-nginx               ClusterIP   136.32.25.142    <none>        8443/TCP                                                                          10d     app=dmc,component=nginx,release=1652329764322098
service/ibm-dmc-1652329764322098-registry-manager    ClusterIP   136.32.222.79    <none>        8443/TCP                                                                          10d     app=dmc,component=registry_manager,release=1652329764322098
service/ibm-dmc-1652329764322098-runsql              ClusterIP   136.32.84.132    <none>        8443/TCP                                                                          10d     app=dmc,component=runsql,release=1652329764322098
service/ibm-dmc-addon-api                            ClusterIP   136.32.232.141   <none>        5555/TCP,4444/TCP                                                                 10d     app.kubernetes.io/component=dmc-addon-api,app.kubernetes.io/instance=dmc-addon,app.kubernetes.io/managed-by=ibm-dmc-addon,app.kubernetes.io/name=ibm-dmc-addon,app=ibm-dmc-addon,component=dmc-addon-api,release=dmc-addon
service/ibm-dmc-addon-ui                             ClusterIP   136.32.158.103   <none>        8080/TCP,8443/TCP                                                                 10d     app.kubernetes.io/component=dmc-addon-ui,app.kubernetes.io/instance=dmc-addon,app.kubernetes.io/managed-by=ibm-dmc-addon,app.kubernetes.io/name=ibm-dmc-addon,app=ibm-dmc-addon,component=dmc-addon-ui,release=dmc-addon
service/ibm-nginx-svc                                ClusterIP   136.32.119.23    <none>        443/TCP                                                                           10d     app.kubernetes.io/component=ibm-nginx,app.kubernetes.io/instance=0015-setup,app.kubernetes.io/managed-by=0015-setup,app.kubernetes.io/name=0015-setup,app=0015-setup,component=ibm-nginx,release=0015-setup
service/internal-nginx-svc                           ClusterIP   136.32.124.17    <none>        12443/TCP,12080/TCP                                                               10d     app.kubernetes.io/component=ibm-nginx,app.kubernetes.io/instance=0015-setup,app.kubernetes.io/managed-by=0015-setup,app.kubernetes.io/name=0015-setup,app=0015-setup,component=ibm-nginx,release=0015-setup
service/usermgmt-svc                                 ClusterIP   136.32.38.34     <none>        8080/TCP,3443/TCP                                                                 10d     app.kubernetes.io/component=usermgmt,app.kubernetes.io/instance=0010-infra,app.kubernetes.io/managed-by=0010-infra,app.kubernetes.io/name=0010-infra,app=0010-infra,component=usermgmt,release=0010-infra
service/zen-audit-svc                                ClusterIP   136.32.98.75     <none>        9880/TCP,9890/TCP,5140/TCP                                                        10d     app.kubernetes.io/component=zen-audit,app.kubernetes.io/instance=0020-core,app.kubernetes.io/managed-by=0020-zen-base,app.kubernetes.io/name=0020-zen-base,app=0020-zen-base,component=zen-audit,release=0020-core
service/zen-core-api-svc                             ClusterIP   136.32.166.171   <none>        3333/TCP,4444/TCP                                                                 10d     app.kubernetes.io/component=zen-core-api,app.kubernetes.io/instance=0020-core,app.kubernetes.io/managed-by=0020-zen-base,app.kubernetes.io/name=0020-zen-base,app=0020-zen-base,component=zen-core-api,release=0020-core
service/zen-core-svc                                 ClusterIP   136.32.151.208   <none>        3003/TCP,3443/TCP                                                                 10d     app.kubernetes.io/component=zen-core,app.kubernetes.io/instance=0020-core,app.kubernetes.io/managed-by=0020-zen-base,app.kubernetes.io/name=0020-zen-base,app=0020-zen-base,component=zen-core,release=0020-core
service/zen-data-sorcerer-svc                        ClusterIP   136.32.49.193    <none>        2222/TCP                                                                          10d     app.kubernetes.io/component=zen-data-sorcerer,app.kubernetes.io/instance=zen-adv,app.kubernetes.io/managed-by=zen-adv,app.kubernetes.io/name=zen-adv,app=zen-adv,component=zen-data-sorcerer,release=zen-adv
service/zen-databases-svc                            ClusterIP   136.32.136.28    <none>        3004/TCP                                                                          10d     app.kubernetes.io/component=zen-databases,app.kubernetes.io/instance=0025-databases,app.kubernetes.io/managed-by=0025-databases,app.kubernetes.io/name=0025-databases,app=0025-databases,component=zen-databases,icpdsupport/addOnId=databases,icpdsupport/app=database,release=0025-databases
service/zen-metastoredb                              ClusterIP   None             <none>        26257/TCP,8080/TCP                                                                2d22h   app.kubernetes.io/component=zen-metastoredb,app.kubernetes.io/instance=0010-infra,app.kubernetes.io/managed-by=0010-infra,app.kubernetes.io/name=0010-infra,app=0010-infra,component=zen-metastoredb,release=0010-infra
service/zen-metastoredb-public                       ClusterIP   136.32.252.164   <none>        26257/TCP,8080/TCP                                                                2d22h   app.kubernetes.io/component=zen-metastoredb,app.kubernetes.io/instance=0010-infra,app.kubernetes.io/managed-by=0010-infra,app.kubernetes.io/name=0010-infra,app=0010-infra,component=zen-metastoredb,release=0010-infra
service/zen-watchdog-svc                             ClusterIP   136.32.255.93    <none>        3333/TCP,4444/TCP                                                                 10d     app.kubernetes.io/component=zen-watchdog,app.kubernetes.io/instance=zen-adv,app.kubernetes.io/managed-by=zen-adv,app.kubernetes.io/name=zen-adv,app=zen-adv,component=zen-watchdog,release=zen-adv

NAME                                                        READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS                    IMAGES                                                                                                              SELECTOR
deployment.apps/ibm-dmc-1652329764322098-admin              2/2     2            2           10d   uc-admin                      cp.icr.io/cp/cpd/ibm-dmc-admin@sha256:77c7fdddc4aa22dc78cfa535533087a2888dbcbc846ba4adb94e37371d8eff26              app=dmc,canary=false,component=admin,release=1652329764322098
deployment.apps/ibm-dmc-1652329764322098-dbapi              2/2     2            2           10d   uc-dbapi                      cp.icr.io/cp/cpd/ibm-dmc-dbapi@sha256:c512b9d26312d999e05e1d81c0dfb3506ce6825cba33548f33a818b1053ccf7b              app=dmc,canary=false,component=dbapi,release=1652329764322098
deployment.apps/ibm-dmc-1652329764322098-explain            2/2     2            2           10d   uc-explain                    cp.icr.io/cp/cpd/ibm-dmc-explain@sha256:940d918e5f15bfdb52cbcb99c890ccda3200986aa93c934f73799a46a70ca6b4            app=dmc,canary=false,component=explain,release=1652329764322098
deployment.apps/ibm-dmc-1652329764322098-job-scheduler      1/1     1            1           10d   uc-job-scheduler              cp.icr.io/cp/cpd/ibm-dmc-job-scheduler@sha256:56b6168b9c82af8f76499785ab47d524ddf357db0b2fd9647c58ef489714c63b      app=dmc,component=job_scheduler,release=1652329764322098
deployment.apps/ibm-dmc-1652329764322098-nginx              2/2     2            2           10d   uc-nginx                      cp.icr.io/cp/cpd/ibm-dmc-nginx@sha256:c1a16aefcc76a6f8beac26890e3f7edfc74c35360ec771b97bcb339489183b36              app=dmc,component=nginx,release=1652329764322098
deployment.apps/ibm-dmc-1652329764322098-registry-manager   1/1     1            1           10d   uc-registry-manager           cp.icr.io/cp/cpd/ibm-dmc-registry-manager@sha256:24add2e1f9c8532c13660549b72f819da6d0259ac89a87dc7e179805afaa7d81   app=dmc,component=registry_manager,release=1652329764322098
deployment.apps/ibm-dmc-1652329764322098-runsql             1/1     1            1           10d   uc-runsql                     cp.icr.io/cp/cpd/ibm-dmc-runsql@sha256:b7231116d3a14a208b0d37386a712f26c8100658402177e78669896ca85288b3             app=dmc,canary=false,component=runsql,release=1652329764322098
deployment.apps/ibm-dmc-addon-api                           1/1     1            1           10d   ibm-dmc-addon-api             cp.icr.io/cp/cpd/ibm-dmc-addon-api@sha256:73818927a86ee137e264e2a610e45755b8616d30543c44f39dee72efe68ceb89          app=ibm-dmc-addon,app.kubernetes.io/component=dmc-addon-api,app.kubernetes.io/instance=dmc-addon,app.kubernetes.io/managed-by=ibm-dmc-addon,app.kubernetes.io/name=ibm-dmc-addon,component=dmc-addon-api,release=dmc-addon
deployment.apps/ibm-dmc-addon-ui                            1/1     1            1           10d   ibm-dmc-addon-ui              cp.icr.io/cp/cpd/ibm-dmc-addon-ui@sha256:1a0f203980df5c6714bce9c7c1b0697eddb1b17f12ecaa484b7e4254c467f1a0           app=ibm-dmc-addon,app.kubernetes.io/component=dmc-addon-ui,app.kubernetes.io/instance=dmc-addon,app.kubernetes.io/managed-by=ibm-dmc-addon,app.kubernetes.io/name=ibm-dmc-addon,component=dmc-addon-ui,release=dmc-addon
deployment.apps/ibm-nginx                                   2/2     2            2           10d   ibm-nginx-container           icr.io/cpopen/cpfs/icp4data-nginx-repo@sha256:949b88d4fc493fca7d9e8a5a327e5262f1680e16c497b822376412bd50b957c2      component=ibm-nginx
deployment.apps/usermgmt                                    2/2     2            2           10d   usermgmt-container            icr.io/cpopen/cpfs/privatecloud-usermgmt@sha256:6fb3f8f6b8917779b307d14c087306d3c724a89715480e43d47b95ec29148415    component=usermgmt
deployment.apps/zen-audit                                   1/1     1            1           10d   zen-audit-container           icr.io/cpopen/cpfs/zen-audit@sha256:4538583559a142b8a68ce36563f0265813024fbe5578fe50bdfb91f110b51fd0                component=zen-audit
deployment.apps/zen-core                                    2/2     2            2           10d   zen-core-container            icr.io/cpopen/cpfs/zen-core@sha256:6e23d75e39a4db0285fde6bbfd1f32012fda0eb4a7f31e62cbdfe3ea54f429e9                 component=zen-core
deployment.apps/zen-core-api                                2/2     2            2           10d   zen-core-api-container        icr.io/cpopen/cpfs/zen-core-api@sha256:a8feefee2dd6451f4b062ede650f847216c7f00ca69337852f1d745cb1cd82bd             component=zen-core-api
deployment.apps/zen-data-sorcerer                           1/1     1            1           10d   zen-data-sorcerer-container   icr.io/cpopen/cpfs/zen-data-sorcerer@sha256:067a910297faa41ef034c220154d180ccfed27acc54f99005bf5d1083cc54696        component=zen-data-sorcerer
deployment.apps/zen-database-core                           1/1     1            1           10d   zen-database-core             cp.icr.io/cp/cpd/zen-database-core@sha256:2c8e052b489fa1e60e993ddd11952896462107af4b394b1f002a0128efe79c7a          app=0025-databases,app.kubernetes.io/component=zen-database-core,app.kubernetes.io/instance=0025-databases,app.kubernetes.io/managed-by=0025-databases,app.kubernetes.io/name=0025-databases,component=zen-database-core,icpdsupport/addOnId=databases,icpdsupport/app=database,release=0025-databases
deployment.apps/zen-databases                               2/2     2            2           10d   zen-databases-container       cp.icr.io/cp/cpd/zen-databases@sha256:00acf4f84ec27b7bb008fb9354d4021365f91749ce5849926373b6eebb79ccc8              app=0025-databases,app.kubernetes.io/component=zen-databases,app.kubernetes.io/instance=0025-databases,app.kubernetes.io/managed-by=0025-databases,app.kubernetes.io/name=0025-databases,component=zen-databases,icpdsupport/addOnId=databases,icpdsupport/app=database,release=0025-databases
deployment.apps/zen-watchdog                                1/1     1            1           10d   zen-watchdog-container        icr.io/cpopen/cpfs/zen-watchdog@sha256:c75866911aecd1e941dcfcc4427e6c86f0a5145ccf576df685c044be9fd53f27             component=zen-watchdog
deployment.apps/zen-watcher                                 1/1     1            1           10d   zen-watcher-container         icr.io/cpopen/cpfs/zen-core-api@sha256:a8feefee2dd6451f4b062ede650f847216c7f00ca69337852f1d745cb1cd82bd             component=zen-watcher

NAME                                                                   DESIRED   CURRENT   READY   AGE     CONTAINERS                    IMAGES                                                                                                              SELECTOR
replicaset.apps/ibm-dmc-1652329764322098-admin-857cf6499d              2         2         2       10d     uc-admin                      cp.icr.io/cp/cpd/ibm-dmc-admin@sha256:77c7fdddc4aa22dc78cfa535533087a2888dbcbc846ba4adb94e37371d8eff26              app=dmc,canary=false,component=admin,pod-template-hash=857cf6499d,release=1652329764322098
replicaset.apps/ibm-dmc-1652329764322098-dbapi-5495cd9bf8              2         2         2       10d     uc-dbapi                      cp.icr.io/cp/cpd/ibm-dmc-dbapi@sha256:c512b9d26312d999e05e1d81c0dfb3506ce6825cba33548f33a818b1053ccf7b              app=dmc,canary=false,component=dbapi,pod-template-hash=5495cd9bf8,release=1652329764322098
replicaset.apps/ibm-dmc-1652329764322098-explain-58cf5d8f64            2         2         2       10d     uc-explain                    cp.icr.io/cp/cpd/ibm-dmc-explain@sha256:940d918e5f15bfdb52cbcb99c890ccda3200986aa93c934f73799a46a70ca6b4            app=dmc,canary=false,component=explain,pod-template-hash=58cf5d8f64,release=1652329764322098
replicaset.apps/ibm-dmc-1652329764322098-job-scheduler-594fd4ff8b      1         1         1       10d     uc-job-scheduler              cp.icr.io/cp/cpd/ibm-dmc-job-scheduler@sha256:56b6168b9c82af8f76499785ab47d524ddf357db0b2fd9647c58ef489714c63b      app=dmc,component=job_scheduler,pod-template-hash=594fd4ff8b,release=1652329764322098
replicaset.apps/ibm-dmc-1652329764322098-nginx-6cbdc7d65c              2         2         2       10d     uc-nginx                      cp.icr.io/cp/cpd/ibm-dmc-nginx@sha256:c1a16aefcc76a6f8beac26890e3f7edfc74c35360ec771b97bcb339489183b36              app=dmc,component=nginx,pod-template-hash=6cbdc7d65c,release=1652329764322098
replicaset.apps/ibm-dmc-1652329764322098-registry-manager-68798b4895   1         1         1       10d     uc-registry-manager           cp.icr.io/cp/cpd/ibm-dmc-registry-manager@sha256:24add2e1f9c8532c13660549b72f819da6d0259ac89a87dc7e179805afaa7d81   app=dmc,component=registry_manager,pod-template-hash=68798b4895,release=1652329764322098
replicaset.apps/ibm-dmc-1652329764322098-runsql-56bcbdd89b             1         1         1       10d     uc-runsql                     cp.icr.io/cp/cpd/ibm-dmc-runsql@sha256:b7231116d3a14a208b0d37386a712f26c8100658402177e78669896ca85288b3             app=dmc,canary=false,component=runsql,pod-template-hash=56bcbdd89b,release=1652329764322098
replicaset.apps/ibm-dmc-addon-api-7f46486979                           1         1         1       10d     ibm-dmc-addon-api             cp.icr.io/cp/cpd/ibm-dmc-addon-api@sha256:73818927a86ee137e264e2a610e45755b8616d30543c44f39dee72efe68ceb89          app=ibm-dmc-addon,app.kubernetes.io/component=dmc-addon-api,app.kubernetes.io/instance=dmc-addon,app.kubernetes.io/managed-by=ibm-dmc-addon,app.kubernetes.io/name=ibm-dmc-addon,component=dmc-addon-api,pod-template-hash=7f46486979,release=dmc-addon
replicaset.apps/ibm-dmc-addon-ui-55b8c9965                             1         1         1       10d     ibm-dmc-addon-ui              cp.icr.io/cp/cpd/ibm-dmc-addon-ui@sha256:1a0f203980df5c6714bce9c7c1b0697eddb1b17f12ecaa484b7e4254c467f1a0           app=ibm-dmc-addon,app.kubernetes.io/component=dmc-addon-ui,app.kubernetes.io/instance=dmc-addon,app.kubernetes.io/managed-by=ibm-dmc-addon,app.kubernetes.io/name=ibm-dmc-addon,component=dmc-addon-ui,pod-template-hash=55b8c9965,release=dmc-addon
replicaset.apps/ibm-nginx-8586d4858c                                   2         2         2       2d20h   ibm-nginx-container           icr.io/cpopen/cpfs/icp4data-nginx-repo@sha256:949b88d4fc493fca7d9e8a5a327e5262f1680e16c497b822376412bd50b957c2      component=ibm-nginx,pod-template-hash=8586d4858c
replicaset.apps/ibm-nginx-fcddfb5c6                                    0         0         0       10d     ibm-nginx-container           quay.io/opencloudio/icp4data-nginx-repo@sha256:9841c03a7b58ca98462ba96c7125221a8e9712a071cdb680fa057464cb3261bb     component=ibm-nginx,pod-template-hash=fcddfb5c6
replicaset.apps/usermgmt-5748699bc6                                    0         0         0       10d     usermgmt-container            quay.io/opencloudio/privatecloud-usermgmt@sha256:7eedadf47ab4959087c631fa0cf658b19111d7b2d116f2e45eb7389462dbd5ef   component=usermgmt,pod-template-hash=5748699bc6
replicaset.apps/usermgmt-5bc9bdf84d                                    2         2         2       2d21h   usermgmt-container            icr.io/cpopen/cpfs/privatecloud-usermgmt@sha256:6fb3f8f6b8917779b307d14c087306d3c724a89715480e43d47b95ec29148415    component=usermgmt,pod-template-hash=5bc9bdf84d
replicaset.apps/zen-audit-559f785bb7                                   1         1         1       2d20h   zen-audit-container           icr.io/cpopen/cpfs/zen-audit@sha256:4538583559a142b8a68ce36563f0265813024fbe5578fe50bdfb91f110b51fd0                component=zen-audit,pod-template-hash=559f785bb7
replicaset.apps/zen-audit-79479cd479                                   0         0         0       10d     zen-audit-container           quay.io/opencloudio/zen-audit@sha256:df446dd245260a5c65e8e53bc5bc3a6b6093098a590192ac14a4ac780c748539               component=zen-audit,pod-template-hash=79479cd479
replicaset.apps/zen-core-747456bd4d                                    0         0         0       10d     zen-core-container            quay.io/opencloudio/zen-core@sha256:6f38841e8f314350bf54b1220eca5114cc6520c1766f0a31f3d5f957283f112c                component=zen-core,pod-template-hash=747456bd4d
replicaset.apps/zen-core-7479564977                                    2         2         2       2d20h   zen-core-container            icr.io/cpopen/cpfs/zen-core@sha256:6e23d75e39a4db0285fde6bbfd1f32012fda0eb4a7f31e62cbdfe3ea54f429e9                 component=zen-core,pod-template-hash=7479564977
replicaset.apps/zen-core-api-6bbd4f4d5d                                0         0         0       10d     zen-core-api-container        quay.io/opencloudio/zen-core-api@sha256:43461dbbde904bc3a8fa6bf052a34b5ec560cc6a5e059ad574342149a25721f5            component=zen-core-api,pod-template-hash=6bbd4f4d5d
replicaset.apps/zen-core-api-78b44cb4f8                                2         2         2       2d20h   zen-core-api-container        icr.io/cpopen/cpfs/zen-core-api@sha256:a8feefee2dd6451f4b062ede650f847216c7f00ca69337852f1d745cb1cd82bd             component=zen-core-api,pod-template-hash=78b44cb4f8
replicaset.apps/zen-data-sorcerer-86d78f795f                           1         1         1       2d19h   zen-data-sorcerer-container   icr.io/cpopen/cpfs/zen-data-sorcerer@sha256:067a910297faa41ef034c220154d180ccfed27acc54f99005bf5d1083cc54696        component=zen-data-sorcerer,pod-template-hash=86d78f795f
replicaset.apps/zen-data-sorcerer-d8db6499                             0         0         0       10d     zen-data-sorcerer-container   quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063       component=zen-data-sorcerer,pod-template-hash=d8db6499
replicaset.apps/zen-database-core-57999565b                            1         1         1       10d     zen-database-core             cp.icr.io/cp/cpd/zen-database-core@sha256:2c8e052b489fa1e60e993ddd11952896462107af4b394b1f002a0128efe79c7a          app=0025-databases,app.kubernetes.io/component=zen-database-core,app.kubernetes.io/instance=0025-databases,app.kubernetes.io/managed-by=0025-databases,app.kubernetes.io/name=0025-databases,component=zen-database-core,icpdsupport/addOnId=databases,icpdsupport/app=database,pod-template-hash=57999565b,release=0025-databases
replicaset.apps/zen-databases-5d9c5cc65f                               2         2         2       10d     zen-databases-container       cp.icr.io/cp/cpd/zen-databases@sha256:00acf4f84ec27b7bb008fb9354d4021365f91749ce5849926373b6eebb79ccc8              app=0025-databases,app.kubernetes.io/component=zen-databases,app.kubernetes.io/instance=0025-databases,app.kubernetes.io/managed-by=0025-databases,app.kubernetes.io/name=0025-databases,component=zen-databases,icpdsupport/addOnId=databases,icpdsupport/app=database,pod-template-hash=5d9c5cc65f,release=0025-databases
replicaset.apps/zen-watchdog-7d4cf9cd89                                0         0         0       10d     zen-watchdog-container        quay.io/opencloudio/zen-watchdog@sha256:b8861a92beb1e5d62453ca4c46146c0426c5118760aac4600b59d498f72cbc18            component=zen-watchdog,pod-template-hash=7d4cf9cd89
replicaset.apps/zen-watchdog-9bf4cb8f6                                 1         1         1       2d19h   zen-watchdog-container        icr.io/cpopen/cpfs/zen-watchdog@sha256:c75866911aecd1e941dcfcc4427e6c86f0a5145ccf576df685c044be9fd53f27             component=zen-watchdog,pod-template-hash=9bf4cb8f6
replicaset.apps/zen-watcher-5f84488b98                                 0         0         0       10d     zen-watcher-container         quay.io/opencloudio/zen-core-api@sha256:43461dbbde904bc3a8fa6bf052a34b5ec560cc6a5e059ad574342149a25721f5            component=zen-watcher,pod-template-hash=5f84488b98
replicaset.apps/zen-watcher-958578cd6                                  1         1         1       2d20h   zen-watcher-container         icr.io/cpopen/cpfs/zen-core-api@sha256:a8feefee2dd6451f4b062ede650f847216c7f00ca69337852f1d745cb1cd82bd             component=zen-watcher,pod-template-hash=958578cd6

NAME                                                  READY   AGE     CONTAINERS               IMAGES
statefulset.apps/c-db2oltp-1652327406348200-db2u      1/1     10d     db2u                     icr.io/db2u/db2u@sha256:0d55343dc4f9b6e9c349da0f35145ebd65e219817a626c2960b046ca266ab394
statefulset.apps/c-db2oltp-1652327406348200-etcd      1/1     10d     etcd                     icr.io/db2u/etcd@sha256:e0a7074573c73d46e4db87d875964a225006b0e65e18b2d64aa1c1827dc46c71
statefulset.apps/c-ibm-dmc-1652329764322098-redis-m   3/3     10d     db,proxy,mgmt,proxylog   cp.icr.io/cp/redis-db-5.0.9@sha256:1041a0f7c2dd8a8886fe1bc22ea20c3ef8a60c44da77e27e1c7232111c6c2c54,cp.icr.io/cp/redis-proxy-5.0.9@sha256:a6bf03767ca72fddbcbb2b83fc8cfb3fd71ef1477af78d6c6d7834bdf77c00b8,cp.icr.io/cp/redis-mgmt-5.0.9@sha256:87121bef639910da91ede486706c1c4840b15e31a1d1e5dc5c3a48a55465d701,cp.icr.io/cp/redis-proxylog-5.0.9@sha256:84b4b5fa30b738631cca76a08c77526e33faad9f66727a8dee1b9afc0b1c65e7
statefulset.apps/c-ibm-dmc-1652329764322098-redis-s   3/3     10d     db,proxy,mgmt,proxylog   cp.icr.io/cp/redis-db-5.0.9@sha256:1041a0f7c2dd8a8886fe1bc22ea20c3ef8a60c44da77e27e1c7232111c6c2c54,cp.icr.io/cp/redis-proxy-5.0.9@sha256:a6bf03767ca72fddbcbb2b83fc8cfb3fd71ef1477af78d6c6d7834bdf77c00b8,cp.icr.io/cp/redis-mgmt-5.0.9@sha256:87121bef639910da91ede486706c1c4840b15e31a1d1e5dc5c3a48a55465d701,cp.icr.io/cp/redis-proxylog-5.0.9@sha256:84b4b5fa30b738631cca76a08c77526e33faad9f66727a8dee1b9afc0b1c65e7
statefulset.apps/dsx-influxdb                         1/1     2d19h   dsx-influxdb             icr.io/cpopen/cpfs/influxdb@sha256:beec1d039955e3c991ed135cf11cdc2430b0eff9db5b093ca76fbcf3f55d5cf6
statefulset.apps/ibm-dmc-1652329764322098-monitor     1/1     10d     uc-monitor               cp.icr.io/cp/cpd/ibm-dmc-monitor@sha256:ae2f5f76401706792fb67044b0873556a7d64a57dceecdc85a77e1e370bef018
statefulset.apps/zen-metastoredb                      3/3     2d22h   zen-metastoredb          icr.io/cpopen/cpfs/zen-metastoredb@sha256:27e8db6592159adb193e499f16aba78e5a33564279acf8653c7650d788913704

NAME                                                     COMPLETIONS   DURATION   AGE     CONTAINERS                          IMAGES                                                                                                           SELECTOR
job.batch/c-db2oltp-1652327406348200-instdb              1/1           2m37s      10d     instdb                              icr.io/db2u/db2u.instdb@sha256:9ee20bed0ed63eded5c44a6118fd5e2b0761c466bd42c32b1b6f3994dd101981                  controller-uid=7f9f7db6-8235-49af-b13e-86e1e3e147a0
job.batch/c-db2oltp-1652327406348200-restore-morph       1/1           8m37s      10d     restore-morph                       icr.io/db2u/db2u.tools@sha256:8581008145ffc7abc6ced1d776fd95632b312e67eb383ddf74c4374d470ec149                   controller-uid=4c44e901-65a9-4a10-8708-2d544c2a07ee
job.batch/create-secrets-job                             1/1           69s        2d21h   create-secrets-job                  icr.io/cpopen/cpfs/icpd-requisite@sha256:d0fe468781d990f2f4c65cf8d9060288be102e6f85c13ec620d0c396846f1d98        controller-uid=3391a87b-cceb-47ee-9379-6a877b46694f
job.batch/diagnostics-cronjob-1653199800                 1/1           11s        9m4s    diagnostics-cronjob                 quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063    controller-uid=d9e9ad66-6478-4291-b1fb-8fb20d2000af
job.batch/dsx-influxdb-set-auth                          1/1           2m9s       2d19h   dsx-influxdb-set-auth               icr.io/cpopen/cpfs/influxdb@sha256:beec1d039955e3c991ed135cf11cdc2430b0eff9db5b093ca76fbcf3f55d5cf6              controller-uid=a4aacf2c-f5cd-41d7-83aa-bff62dd39b6d
job.batch/setup-nginx-job                                1/1           5m50s      2d21h   nginx-preinstall-job                icr.io/cpopen/cpfs/icp4data-nginx-repo@sha256:949b88d4fc493fca7d9e8a5a327e5262f1680e16c497b822376412bd50b957c2   controller-uid=2424d008-8677-40e1-a09e-42b8f3b66239
job.batch/watchdog-alert-monitoring-cronjob-1653199800   1/1           13s        9m4s    watchdog-alert-monitoring-cronjob   quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063    controller-uid=c5aeafa3-e813-4ff9-b334-91d454aeb5f3
job.batch/zen-metastoredb-certs                          1/1           17s        2d21h   init-certs                          icr.io/cpopen/cpfs/zen-metastoredb@sha256:27e8db6592159adb193e499f16aba78e5a33564279acf8653c7650d788913704       controller-uid=7c49db1a-914a-4d85-be51-951aab6b8fce
job.batch/zen-metastoredb-init                           1/1           15s        2d22h   cluster-init                        icr.io/cpopen/cpfs/zen-metastoredb@sha256:27e8db6592159adb193e499f16aba78e5a33564279acf8653c7650d788913704       controller-uid=ca900ba9-27c1-4f13-b769-da5a63a50075
job.batch/zen-post-requisite-job                         1/1           9s         2d20h   zen-post-requisite-job              icr.io/cpopen/cpfs/icpd-requisite@sha256:d0fe468781d990f2f4c65cf8d9060288be102e6f85c13ec620d0c396846f1d98        controller-uid=4c2cbcbb-7b52-41a9-a233-b40d28a8cb72
job.batch/zen-pre-requisite-job                          1/1           9m41s      2d20h   zen-pre-requisite-job               icr.io/cpopen/cpfs/icpd-requisite@sha256:d0fe468781d990f2f4c65cf8d9060288be102e6f85c13ec620d0c396846f1d98        controller-uid=a22be972-725a-4d2f-8fe6-7eda89b67224
job.batch/zen-watchdog-cronjob-1653199800                1/1           11s        9m4s    zen-watchdog-cronjob                quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063    controller-uid=ae9b9d40-e030-44f3-9da7-271f33474d7e
job.batch/zen-watchdog-post-requisite-job                1/1           57s        2d19h   zen-watchdog-container              icr.io/cpopen/cpfs/zen-watchdog@sha256:c75866911aecd1e941dcfcc4427e6c86f0a5145ccf576df685c044be9fd53f27          controller-uid=870284bc-1fd0-48a4-aa0c-3edf29233da5

NAME                                              SCHEDULE       SUSPEND   ACTIVE   LAST SCHEDULE   AGE     CONTAINERS                          IMAGES                                                                                                             SELECTOR
cronjob.batch/diagnostics-cronjob                 */10 * * * *   False     0        9m7s            10d     diagnostics-cronjob                 quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063      <none>
cronjob.batch/usermgmt-ldap-sync-cron-job         */20 * * * *   True      0        <none>          2d19h   usermgmt-ldap-sync-cron-job         icr.io/cpopen/cpfs/privatecloud-usermgmt@sha256:6fb3f8f6b8917779b307d14c087306d3c724a89715480e43d47b95ec29148415   <none>
cronjob.batch/watchdog-alert-monitoring-cronjob   */10 * * * *   False     0        9m7s            10d     watchdog-alert-monitoring-cronjob   quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063      <none>
cronjob.batch/zen-watchdog-cronjob                */10 * * * *   False     0        9m7s            10d     zen-watchdog-cronjob                quay.io/opencloudio/zen-data-sorcerer@sha256:c3e05815e1c74bd02e271b99e0f0745a79fcca45992a06423c5a996d48bdd063      <none>

NAME                           HOST/PORT                   PATH   SERVICES        PORT                   TERMINATION            WILDCARD
route.route.openshift.io/cpd   cpd-sandy.apps.js.ocp.adl          ibm-nginx-svc   ibm-nginx-https-port   passthrough/Redirect   None
```

### Login using Openshift CLI
- [CLI download reference](https://access.redhat.com/downloads/content/290)
- Give execution permiossions
```
jsmacpro15touch:bin kr050496$ oc
-bash: /Users/kr050496/software/oc/oc: Permission denied
jsmacpro15touch:bin kr050496$ cd /Users/kr050496/software/oc
jsmacpro15touch:oc kr050496$ ls -al
total 391856
drwx------@  6 kr050496  staff        192 18 May 16:28 .
drwxr-xr-x  16 kr050496  staff        512 18 May 16:29 ..
-rw-r--r--   1 kr050496  staff      12288 18 May 16:28 .README.md.swp
-rw-r--r--@  1 kr050496  staff        954 11 May 16:46 README.md
-rw-r--r-x@  1 kr050496  staff  100305008 11 May 16:46 kubectl
-rw-r--r-x@  1 kr050496  staff  100304992 11 May 16:46 oc

jsmacpro15touch:oc kr050496$ chmod +x oc
jsmacpro15touch:oc kr050496$ chmod +x kubectl
jsmacpro15touch:oc kr050496$ ls -al
total 391856
drwx------@  6 kr050496  staff        192 18 May 16:28 .
drwxr-xr-x  16 kr050496  staff        512 18 May 16:29 ..
-rw-r--r--   1 kr050496  staff      12288 18 May 16:28 .README.md.swp
-rw-r--r--@  1 kr050496  staff        954 11 May 16:46 README.md
-rwxr-xr-x@  1 kr050496  staff  100305008 11 May 16:46 kubectl
-rwxr-xr-x@  1 kr050496  staff  100304992 11 May 16:46 oc
```
- add the URI pattern to /etc/hosts

```
api.js.ocp.adl
```
Example)
```
9.192.153.83 js-bastion console-openshift-console.apps.js.ocp.adl oauth-openshift.apps.js.ocp.adl cpd-sandy.apps.js.ocp.adl api.js.ocp.adl
```
- Log in
```
oc login -u kubeadmin -p gjLwx-7xGuF-Pxv8j-qvG2d https://api.js.ocp.adl:6443
```
example)
```
jsmacpro15touch:oc kr050496$ oc login -u kubeadmin -p gjLwx-7xGuF-Pxv8j-qvG2d https://api.js.ocp.adl:6443
The server uses a certificate signed by an unknown authority.
You can bypass the certificate check, but any data you send to the server could be intercepted by others.
Use insecure connections? (y/n): y

Login successful.

You have access to 61 projects, the list has been suppressed. You can list all projects with 'oc projects'

Using project "default".
jsmacpro15touch:oc kr050496$ oc version
Client Version: 4.10.13
Server Version: 4.6.48
Kubernetes Version: v1.19.14+fcff70a

jsmacpro15touch:oc kr050496$ oc get all
NAME                                          READY   STATUS      RESTARTS   AGE
pod/nfs-client-provisioner-5596f5b9f8-tthlk   1/1     Running     4          6d7h
pod/test-pod                                  0/1     Completed   0          6d7h

NAME                 TYPE           CLUSTER-IP   EXTERNAL-IP                            PORT(S)   AGE
service/kubernetes   ClusterIP      136.32.0.1   <none>                                 443/TCP   9d
service/openshift    ExternalName   <none>       kubernetes.default.svc.cluster.local   <none>    9d

NAME                                     READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nfs-client-provisioner   1/1     1            1           6d7h

NAME                                                DESIRED   CURRENT   READY   AGE
replicaset.apps/nfs-client-provisioner-5596f5b9f8   1         1         1       6d7h
```


### Log into each node from bastion node  

```
ssh code@node
sudo su - 
```

#### Configuration   

```
[root@bastion ~]# oc config view
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: DATA+OMITTED
    server: https://api.js.ocp.adl:6443
  name: js
- cluster:
    insecure-skip-tls-verify: true
    server: https://localhost:6443
  name: localhost:6443
contexts:
- context:
    cluster: js
    user: admin
  name: admin
- context:
    cluster: localhost:6443
    namespace: cpd-operators
    user: kube:admin/localhost:6443
  name: cpd-operators/localhost:6443/kube:admin
- context:
    cluster: localhost:6443
    namespace: default
    user: kube:admin/localhost:6443
  name: default/localhost:6443/kube:admin
- context:
    cluster: localhost:6443
    namespace: ibm-common-services
    user: kube:admin/localhost:6443
  name: ibm-common-services/localhost:6443/kube:admin
- context:
    cluster: localhost:6443
    namespace: sandy
    user: kube:admin/localhost:6443
  name: sandy/localhost:6443/kube:admin
current-context: sandy/localhost:6443/kube:admin
kind: Config
preferences: {}
users:
- name: admin
  user:
    client-certificate-data: REDACTED
    client-key-data: REDACTED
- name: kube:admin/localhost:6443
  user:
    token: REDACTED
```

[Go to content](#Contents)

### Showing service/ports/IP of pods
```
oc get svc
```

[Go to content](#Contents)

## MISC.   

### `kubectl` vs `oc`

[Differences Between oc and kubectl](https://docs.openshift.com/container-platform/3.11/cli_reference/differences_oc_kubectl.html)   

```
[root@bastion ~]# ls -al /usr/bin/kubectl
-rwxr-xr-x. 2 root root 74680680 Oct 12  2021 /usr/bin/kubectl
[root@bastion ~]# ls -al /usr/bin/oc
-rwxr-xr-x. 2 root root 74680680 Oct 12  2021 /usr/bin/oc
```


```
oc get deploy
```
> When creating services, firstly creating a `deployment`, then `pods`, then `service`.    
And related service to deployment.      

[Go to content](#Contents)

## oc commands
```
oc whoami
oc get sub -A   
oc get pvc -A
oc get csv -A
oc project <namespace name>   # namespace = project 
oc describe pod/c-db2ucluster-sample-instdb-sdsj4 
oc get job

oc get cronjob -A
ex) 
[root@api.jscp4d.cp.fyre.ibm.com util]# oc get cronjob -A
NAMESPACE                              NAME               SCHEDULE       SUSPEND   ACTIVE   LAST SCHEDULE   AGE
openshift-image-registry               image-pruner       0 0 * * *      False     0        <none>          6h12m
openshift-operator-lifecycle-manager   collect-profiles   */15 * * * *   False     0        100s            6h14m
oc get sc -A
```

### drain   

The command below should force it to ignore those PDBs and continue with the drain. 

```
oc adm drain <node1> --ignore-daemonsets --delete-emptydir-data --force --disable-eviction
```
https://docs.openshift.com/container-platform/4.10/nodes/nodes/nodes-nodes-rebooting.html  


Sometimes pods will become hung and unable to free up.  If you see that happening even with the `--disable-eviction`,    
you may need to forcible terminate those pods.     
The KCS below should help you handle those.     

https://access.redhat.com/solutions/2317401    

## To check

```
oc get pods -A -o wide
oc get pods -A -o wide | grep master
oc get operandrequest
oc get log
oc get log -f  
ex)
oc logs pod/db2u-operator-manager-5857b8b5b9-gp4cj -n openshift-operators

# repalce namespace as yours.
oc get wkc wkc-cr -n <your cpd namespace > -o jsonpath="{.status.wkcStatus}"
oc get CCS ccs-cr -n <your cpd namespace >  -o jsonpath='{.status.ccsStatus}
oc get DataRefinery datarefinery-sample -n <your cpd namespace >  -o jsonpath='{.status.datarefineryStatus} {"\n"}’
oc get Db2aaserviceService db2aaservice-cr -n <your cpd namespace>  -o jsonpath='{.status.db2aaserviceStatus} {"\n"}’
oc get IIS iis-cr -n <your cpd namespace >  -o jsonpath='{.status.iisStatus} {"\n"}’
oc get UG ug-cr -n <your cpd namespace >  -o jsonpath='{.status.ugStatus} {"\n"}'

```

## References
[Introducing OpenShift Container Storage 4.2](https://cloud.redhat.com/blog/introducing-openshift-container-storage-4-2)     
