import hashlib


def hash_str(source):
    return hashlib.new('sha512', source.encode('utf-8')).hexdigest()
