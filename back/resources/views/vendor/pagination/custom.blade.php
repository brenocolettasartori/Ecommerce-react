@if ($paginator->hasPages())
                            <ul class="pagination">
                            @if ($paginator->onFirstPage())
                            <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                                <a class="page-link" href="javascript:;" aria-label="Previous">	<span aria-hidden="true">«</span>
								</a>
                            </li>
                            @else
                            <li class="page-item">
                                <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">«</a>
                            </li>
                            @endif

                            @foreach ($elements as $element)
                            @if (is_string($element))
                                <li class="disabled" aria-disabled="true"><span>{{ $element }}</span></li>
                            @endif
                            @if (is_array($element))
                            @foreach ($element as $page => $url)
                            @if ($page == $paginator->currentPage())
                                <li class="page-item active active" aria-current="page"><a class="page-link" href="javascript:;">{{ $page }}</a></li>
                            @else
                                <li><a class="page-link" href="{{ $url }}">{{ $page }}</a></li>
                            @endif
                            @endforeach
                            @endif
                            @endforeach


                            @if ($paginator->hasMorePages())
                            <li class="page-item">
                                <a class="page-link" href="{{ $paginator->nextPageUrl() }}" aria-label="Next">	<span aria-hidden="true">»</span></a>   
                            </li>
                            @else
                            <li class="page-item disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                                <a class="page-link" href="javascript:;" rel="next" aria-label="@lang('pagination.next')">»</a>
                            </li>
                            @endif


                            </ul>
@endif