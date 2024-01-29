# podman 

- Installed in Redhat 8.X ( CentOS 8.X, Fedora 34 ) by default. So do not install `docker`   


## podman registry file

```
$ cat /etc/containers/registries.conf     
..
# # An array of host[:port] registries to try when pulling an unqualified image, in order.
unqualified-search-registries = ["registry.fedoraproject.org", "registry.access.redhat.com", "docker.io", "quay.io"]
..
```

