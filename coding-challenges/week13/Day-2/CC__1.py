class Solution:
    def check_Ipv4(self,ip):
        s = ip.split(".")
        if(len(s)!=4):
            return "Neither"
        for i in range(len(s)):
            if(s[i] != ""):
                if(not s[i].isdecimal()):
                    return "Neither"
                if(len(s[i])>1):
                    if(s[i][0]=="0"):
                        return "Neither"
                if(int(s[i])>=0 and int(s[i])<256):
                    pass
                else:
                    return "Neither"
            else:
                return "Neither"
        return "IPv4"
    
    def check_Ipv6(self,ip):
        s = ip.split(":")
        if(len(s)!=8):
            return "Neither"
        for i in range(len(s)):
            if(s[i] != ""):
                if(len(s[i])>=1 and len(s[i])<=4):
                    if(all(c in string.hexdigits for c in s[i])):
                        pass
                    else:
                        return "Neither"
                else:
                    return "Neither"
            else:
                return "Neither"
        return "IPv6"
    
    
    def validIPAddress(self, IP: str) -> str:
        if('.' in IP):
            return self.check_Ipv4(IP)
        else:
            return self.check_Ipv6(IP)