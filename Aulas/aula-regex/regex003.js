/* 
# invalid email
abc
abc.com

# valid email address
abc@mail.com
abc@mail.nz
abc@mail.co.nz
abc123@mail.com
abc.def@music.com

# invalid email prefix
abc-@mail.com
abc..def@mail.com
.abc@mail.com
abc#def@mail.com

# valid email prefix
abc-d@mail.com
abc.def@mail.com
abc@mail.com
abc_def@mail.com

# invalid domain suffix
abc.def@mail.c
abc.def@mail#archive.com
abc.def@mail
abc.def@mail..com

# valid domain suffix
abc.def@mail.cc
abc.def@mail-archive.com
abc.def@mail.org
abc.def@mail.com
fully-qualified-domain@example.com 
*/

const regex = new RegExp(/^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$/, 'ig')

console.log(regex.test('abc.def@mail'))