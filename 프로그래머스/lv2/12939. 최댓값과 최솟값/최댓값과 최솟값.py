# map함수: 원본 리스트를 변경하지 않고 새 리스트를 생성
# map은 리스트의 요소를 지정된 함수로 처리해주는 함수
# list(map(함수, 리스트))
#format이용하여 리스트를 다시 문자열로, min =최소값, max =최대값 리턴
#split()은 공백을 사용하여 문자열을 분할


# def solution(s):
#     b=s.split()
#     print(b)
#     return str(min(b))+' '+str(max(b))


def solution(s):
    s = list(map(int, s.split()))
    print(s)
    return '{} {}'.format(min(s), max(s))

